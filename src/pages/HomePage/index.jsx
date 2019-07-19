import React, { Component } from 'react';
import Router, { withRouter } from 'next/router';
import isEmpty from '../../utils/isEmpty';

// Mixpanel
import { track_LoadedHomePage, track_CreatePlug } from '../../utils/mixpanel';

// SubComponents
import Modal from '../../components/Modal';
import { Loader } from '../../components/Loader';

// Redux
import { connect } from 'react-redux';

import { createPlugWithApi } from '../../features/plugs/actions';

const navHandler = shortID => {
  Router.push(
    {
      pathname: '/[shortID]',
      query: { preview: true },
    },
    `/${shortID}`,
  );
};

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      error: {},
      loading: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount = () => {
    track_LoadedHomePage();
  };

  clearErrors = () => {
    this.setState({ error: {} });
  };

  componentWillReceiveProps(nextProps) {
    if (!isEmpty(nextProps.errors.searchError)) {
      console.log('CREATE PAGE', 'SEARCHERROR', nextProps.errors.searchError);
      this.setState({ loading: false });
      return this.setState({ error: nextProps.errors.searchError });
    }
  }

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true });
    const url = this.state.input;
    this.clearErrors();
    // Post Plug to API
    createPlugWithApi(url)
      .then(newPlug => {
        console.log('handleSubmit:newPlug', newPlug);
        const { shortID, soundcloudURL } = newPlug;
        track_CreatePlug({ plugID: shortID, soundcloudURL });
        this.setState({ loading: false });
        // this.props.history.push(`/${shortID}/?preview=true`);
        navHandler(shortID);
      })
      .catch(err => {
        console.log('HandleSubmit: error', err);
        this.setState({
          error: err,
        });
      });
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const renderedError = isEmpty(this.state.error)
      ? null
      : this.state.error.message;

    const renderedButton = this.state.loading ? (
      <Loader />
    ) : (
      <input type="submit" value="Plug it" id="SUBMIT" className="pure-button btn-share" />
    );

    return (
      <center>
        <div className="drop-in">
          <h2 className="instructions">
            Drop the link to your Soundcloud playlist, single or profile. <br /> We'll
            do the rest.
          </h2>
          <form class="pure-form" onSubmit={this.handleSubmit}>
            <input
              type="text"
              className="sc-input"
              placeholder="Link goes here!"
              value={this.state.input}
              onChange={this.handleChange('input')}
              required
            />
            <p className="create-error-message">{renderedError} </p>

            {renderedButton}
          </form>
        </div>
        <Modal />
      </center>
    );
  }
}

const mapStateToProps = state => ({
  audio: state.audio,
  errors: state.errors,
});

export default withRouter(connect(mapStateToProps)(HomePage)); // {renderedTrackArtwork} //
