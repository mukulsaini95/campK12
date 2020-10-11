import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { push } from 'react-router-redux';
import * as CONSTANTS from './constants';
// import { getHeaders, errorHandler} from "../../utils/commonUtils";


let url = "http://localhost:4000/getAllCoursesV2";

export function* getTodoListHandlerAsync() {


  try {
    const response = yield call(axios.get, url, {});
    yield put({ type: CONSTANTS.GET_ALL_COURCE_SUCCESS, response: response.data });
  } catch (error) {
    yield put({ type: CONSTANTS.GET_ALL_COURCE_FAILURE, error: error });
  }
}

export function* watcherGetAllCourseRequests() {
  yield takeLatest(CONSTANTS.GET_ALL_COURCE, getTodoListHandlerAsync);
}

export default function* rootSaga() {
  yield [
    watcherGetAllCourseRequests(),
  ];
}