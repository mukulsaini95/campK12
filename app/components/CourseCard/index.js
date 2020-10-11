/**
 *
 * CourseCard
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function CourseCard(props) {
  const getNumber = (num) => {
    if (num > 999 && num < 1000000) {
      return (num / 1000).toFixed(0) + 'K';
    } else if (num > 1000000) {
      return (num / 1000000).toFixed(0) + 'M';
    } else if (num < 900) {
      return num;
    }
  }
  const { name, price, discountedPrice, totalHours, banner, difficulty, pastEnrolled, category: { title }, minGrade, maxGrade } = props.course
  return (
    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
      <div className="course">
        <div className="course-img">
          <img src={banner} />
        </div>
        <div className="course-content">
          <h3>{name} :</h3>
          <h3>{title}</h3>
          <div className="sub-header">
            <span>LEVEL<strong>{difficulty}</strong></span>
            <span>GRADES<strong>{minGrade} - {maxGrade}</strong></span>
          </div>
          <h5><img src={require("../../assets/images/icons/path-copy-11.svg")} /> <strong>{getNumber(pastEnrolled)}</strong> Happy
            Students</h5>
          <h5><img src={require("../../assets/images//icons/icon-copy-14.svg")} /> <strong>{totalHours} Hours</strong> over
            6 Session</h5>
          <h5><img src={require("../../assets/images//icons/shape-copy-12.svg")} /> Weekend and Weekday Batches
        </h5>

          <div className="price">
            <strong><img src={require("../../assets/images/icons/rupees-icon-copy.svg")} /> {discountedPrice} <span
              className="discount">{price}</span></strong>
            <strong className="text-green"><img src={require("../../assets/images/icons/offers-icon-copy.svg")} />
              {Math.floor(((price - discountedPrice) / price) * 100)}% off</strong>
          </div>
          <button className="btn-more"> LEARN MORE</button>
        </div>
      </div>
    </div>
  );
}

CourseCard.propTypes = {};

export default CourseCard;
