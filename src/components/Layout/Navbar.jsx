import React, { Component, Fragment } from 'react';
import Link from 'next/link';
// import isEmpty from '../../utils/isEmpty';

// Redux
// import { connect } from 'react-redux';

// Import Subcomponents
// import Sidebar from '../Sidebar';

class Navbar extends Component {
  render() {
    return (
      <Fragment>
        <div className="header-container">
          <Link prefetch href="/create">
            <a className="header-item-small" id="1">create</a>
          </Link>
          <Link href="/">
            <a className="header-item" id="2">plug.</a>
          </Link>
          <Link href="/explore">
            <a className="header-item-small"  id="3">explore</a>
          </Link>
        </div>
      </Fragment>
    );
  }
}

// const mapStateToProps = state => ({
//   audio: state.audio,
//   errors: state.errors,
// });

export default Navbar;
