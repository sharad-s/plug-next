import React, { Component, Fragment } from 'react';

import Navbar from './Navbar';

export default class index extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <div id="LAYOUT">{this.props.children}</div>
        <style jsx="true">
          {`
						#LAYOUT {
							display:grid;
							grid-template-columns: 10% 1fr 10%;
							grid-row-start:2
							background-color:white;

						}
					`}
        </style>
      </Fragment>
    );
  }
}
