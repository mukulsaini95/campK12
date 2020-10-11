/*
 *
 * HomePage reducer
 *
 */

import { fromJS } from 'immutable';
import * as CONSTANTS from './constants'
export const initialState = fromJS({
});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case CONSTANTS.GET_ALL_COURCE_SUCCESS:
      return Object.assign({}, state, {
        allCourse: action.response
      });
    case CONSTANTS.GET_ALL_COURCE_FAILURE:
      return Object.assign({}, state, {
        allCourseFailure: { error: action.error, timestamp: new Date() }
      })
    default:
      return state;
  }
}

export default homePageReducer;
