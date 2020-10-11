/**
 *
 * CourseList
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import FilterBox from "../FilterBox";
import CourseCard from "../CourseCard"
const TABS = [{
  title: "Grade 1-4",
  id: "grade_1-4"
}, {
  title: "Grade 5-8",
  id: "grade_5-8"
}, {
  title: "Grade 9-12",
  id: "grade_9-12"
}]

function CourseList({ allCourse, selectedTab, tabChangeHandler }) {
  return (
    <section className="section">
      <div className="container">
        <div className="course-wrapper">
          <div className="btn-tab-group">
            {TABS.map(({ id, title }) => (<button className={selectedTab === id ? "btn-tab active" : "btn-tab "} key={id} onClick={() => tabChangeHandler(id)}>{title}</button>))}
          </div>
          <FilterBox selectedTab={selectedTab} />

          <div className="row">
            {allCourse[selectedTab].map(course => (
              <CourseCard course={course} key={course._id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

CourseList.propTypes = {};

export default CourseList;
