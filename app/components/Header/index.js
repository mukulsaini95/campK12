/**
 *
 * Header
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return <header className="app-header" id="header">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8 col-md-5 col-sm-12">
            <nav className="app-nav">
              <div className="icon">
                <img src={require("../../assets/images/logo/camp-k-12-logo.svg")} />
              </div>
              <button className="btn-collapse">=</button>
              <ul className="nav-collapse show">
                <li className="nav-item active">ONLINE COURSES</li>
                <li className="nav-item">OFFLINE CAMPS</li>
                <li className="nav-item">REFER & EARN</li>
              </ul>
            </nav>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-7 col-sm-12">
            <div className="btn-group flex-end">
              <button className="btn-icon bg-orange">
                <img src={require("../../assets/images/icons/leaderboard.svg")} alt="Leader Board" />
              </button>
              <button className="btn-nav">
                FREE TRIAL
                      </button>
              <button className="btn-nav">
                LOG IN
                      </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  }
}

Header.propTypes = {};

export default Header;
