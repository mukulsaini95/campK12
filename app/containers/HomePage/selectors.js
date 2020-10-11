import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the homePage state domain
 */

const selectHomePageDomain = state => state.get('homePage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by HomePage
 */

const makeSelectHomePage = () =>
createSelector(selectHomePageDomain, substate => substate.toJS());


export const allCourseSuccess = () =>
  createSelector(selectHomePageDomain, substate => substate.allCourse);

export const allCourseFailure = () =>
  createSelector(selectHomePageDomain, substate => substate.allCourseFailure);

