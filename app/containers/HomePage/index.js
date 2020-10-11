/**
 *
 * HomePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import * as ACTIONS from "./actions";
import * as SELECTIONS from "./selectors";
import Header from "../../components/Header";
import OnlineCourses from "../../components/OnlineCourses/Loadable";
import CourseList from "../../components/CourseList/Loadable";
/* eslint-disable react/prefer-stateless-function */

export class HomePage extends React.Component {
  state = {
    isFetching: true,
    selectedTab: "grade_5-8",
    allCourse: {
      "grade_1-4": [],
      "grade_5-8": [],
      "grade_9-12": [],
    }
  }
  
  listenScrollEvent = e => {
    if (window.scrollY > 100) {
      document.getElementById("header").style.backgroundColor = "#2b91ed"
      document.getElementById("header").style.boxShadow = "0 2px 4px rgba(0,0,0,.43)"
    } else {
      document.getElementById("header").style.backgroundColor = ""
      document.getElementById("header").style.boxShadow = ""
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  componentWillMount() {
    this.props.getAllCourse()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.allCourseSuccess && nextProps.allCourseSuccess !== this.props.allCourseSuccess) {
      let allCourse = JSON.parse(JSON.stringify(this.state.allCourse));
      nextProps.allCourseSuccess.map(temp => {
        allCourse[`grade_${temp.minGrade + "-" + temp.maxGrade}`].push(temp);
      })
      this.setState({
        allCourse,
        isFetching: false
      })
    }

  }

  tabChangeHandler = selectedTab => {
    this.setState({
      selectedTab
    })
  }
  
  render() {
    if (this.state.isFetching)
      return (<div>Loading</div>)
    else
      return (<div className="app-wrapper">
        <Header />
        <OnlineCourses />
        <CourseList allCourse={this.state.allCourse} selectedTab={this.state.selectedTab} tabChangeHandler={this.tabChangeHandler}/>
      </div>
      )
  }
}

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  allCourseSuccess: SELECTIONS.allCourseSuccess(),
  allCourseFailure: SELECTIONS.allCourseFailure(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    getAllCourse: () => dispatch(ACTIONS.getAllCourse()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'homePage', reducer });
const withSaga = injectSaga({ key: 'homePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
