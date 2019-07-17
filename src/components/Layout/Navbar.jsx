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
          <Link href="/create">
            <a id="1">create</a>
          </Link>
          <Link href="/">
            <a id="2">plug.</a>
          </Link>
          <Link href="/explore">
            <a id="3">explore</a>
          </Link>
        </div>
        <style jsx="true">
          {`
            a {
              text-decoration: none;
              color: #f3e576;
            }
            #1 {
              grid-column-start: 1;
              font-size: 17px;
              padding-top: 7px;
              

            }
            #2 {
              grid-column-start: 2;
              font-size: 35px;
              font-weight: bold;
            }
            #3 {
              grid-column-start: 3;
              font-size: 17px;
              padding-top: 7px;
            }
            .header-container {
              /*margin: auto;*/
              margin-top: 0px;
              margin-bottom: 0px;
              padding: px;
              width: 100%;
              height: 100%;
              grid-row-start: 1;
              display: grid;
              grid-template-columns: 1fr 1fr 1fr;
              justify-items: center;
              align-items: center;
              // background-color: black;
            }
            .header-item {
              color: #f3e576;
              text-decoration: none;
              font-weight: bold;
              font-family: 'Poppins', sans-serif;
              font-size: 35px;
            }
            .header-item-small {
              color: #f3e576;
              text-decoration: none;
              font-weight: bold;
              font-family: 'Poppins', sans-serif;
              font-size: 17px;
              margin-top: auto;
              margin-bottom: auto;
              padding-top: 7px;
            }
          `}
        </style>
      </Fragment>
    );
  }
}

// const mapStateToProps = state => ({
//   audio: state.audio,
//   errors: state.errors,
// });

export default Navbar;
