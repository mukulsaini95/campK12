/**
 *
 * FilterBox
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';


function FilterBox({selectedTab}) {
  return (
    <div className="filter-box row">
      <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
        <h5>Showing <strong>All</strong> courses for <strong>Grades {selectedTab.split("_")[1]}</strong></h5>
      </div>
      <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
        <select className="form-control float-right">
          <option>All courses</option>
        </select>
      </div>
    </div>
  );
}

FilterBox.propTypes = {};

export default FilterBox;
