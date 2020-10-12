import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { push } from 'react-router-redux';
import * as CONSTANTS from './constants';
// import { getHeaders, errorHandler} from "../../utils/commonUtils";


let url = "https://5f58a1948040620016ab83d0.mockapi.io/api/v1/getAllCourses";

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