import React, { Component, Fragment } from 'react';

import Navbar from './Navbar';

export default class index extends Component {
  render() {
    return (
      <Fragment>
          <Navbar />
          <div id="LAYOUT">{this.props.children}</div>
      </Fragment>
    );
  }
}
