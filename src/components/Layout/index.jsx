import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import store from '../../state/store';

import Navbar from './Navbar';

export default class index extends Component {
  render() {
    return (
      <Fragment>
        <Provider store={store}>
          <Navbar />
          <div id="LAYOUT">{this.props.children}</div>
        </Provider>
        <style jsx="true">
          {`
						#LAYOUT {
							display:grid;
							grid-template-columns: 10% 1fr 10%;
							grid-row-start:2
						}
					`}
        </style>
      </Fragment>
    );
  }
}
