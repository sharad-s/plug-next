import React, { Component, Fragment } from 'react';
import isEmpty from '../../utils/isEmpty';

// Redux
import { connect } from 'react-redux';
import {
  pauseSnippet,
  playSnippet,
  setSnippet,
} from '../../features/audioplayer/actions';

// Subcomponents
import { SmallLoader as Loader } from '../Loader';

class Beatcard extends Component {
  // Update animation based nextProps.audio.secondsPassed
  componentWillReceiveProps(nextProps) {
    const secondsPassed = nextProps.audio.currentTime - 45;
    let duration = 15;

    const elem = document.querySelector('.information-overlay .fill');

    let numnum = ((secondsPassed % duration) / duration - 1) * 100;
    if (secondsPassed > duration) {
      numnum = -100;
    }

    elem.style.transform = `translate3d(${numnum}%, 0, 0)`;

    /* Debug for animation */
    // console.log(
    //   'componentWillReceiveProps',
    //   'Current Second',
    //   secondsPassed,
    //   'Translate3D Percentage:',
    //   numnum,
    //   "isPlaying:",
    //   nextProps.audio.isPlaying
    // );
  }

  handleClick = async e => {
    const { isPlaying } = this.props.audio;
    e.preventDefault();
    console.log('Clicked');
    if (isPlaying) {
      this.pauseSong();
    } else {
      this.playSong();
    }
  };

  async playSong() {
    await playSnippet();
    await setSnippet();
  }

  async pauseSong() {
    await pauseSnippet();
  }

  render() {
    const { audio, track } = this.props;

    const renderedPlayButtonText = audio.isPlaying ? (
      <i className="fas fa-pause" onClick={this.handleClick} />
    ) : (
      <i className="fas fa-play" onClick={this.handleClick} />
    );

    const renderedPlayButton = (
      <div style={{ marginLeft: '10px' }}>{renderedPlayButtonText}</div>
    );

    const renderedPlayCount = <span> {track.playCount} </span>;

    return (
      <div className="card-container-god">
        {/* Card In Whole */}
        <div className="card-container noselect">
          {/* Card Image + Play BUtton Container */}
          <div className="card-image-container">
            {/* Card Image */}
            <img src={track.imageURL} className="card-image" />

            {/* 25% Image Bottom Overlay with Track Details */}
            <div className="information-overlay" id="OVERLAY">
              <div className="fill" />
              <div className="details-container">
                <div className="details">
                  <p className="title-text noselect">
                    {track.title ? track.title : null}
                  </p>
                  <p className="title-text noselect">
                    {track.artist ? track.artist : null}
                  </p>
                </div>
                <div className="icon-on-overlay">
                  {audio.loading ? (
                    <Loader />
                  ) : (
                    <Fragment>{renderedPlayCount}</Fragment>
                  )}
                </div>
              </div>
            </div>

            {/* 100% Invisble Image Overlay */}
            <div className="invisible-overlay" id="INVISIBLE-OVERLAY" onClick={this.handleClick}>
              {renderedPlayButton}
            </div>
          </div>

          {/* Soundcloud Underbutton */}

          <a className="pure-button btn-sc" href={track.soundcloudPermalinkURL}>
            <i className="fab fa-soundcloud" /> Listen on Soundcloud
          </a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  audio: state.audio,
});

export default connect(mapStateToProps)(Beatcard); // {renderedTrackArtwork} //         {renderedTrackMetadata} //         {renederedSeconds} //         {renderedPlaylistName} //         {renderedPlayButton}
