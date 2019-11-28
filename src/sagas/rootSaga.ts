import { takeLatest } from "redux-saga/effects";
import { ACTIONS } from "../constants";
import RegistAsync from "./registSaga";

function* rootSaga() {
  yield takeLatest(ACTIONS.REGIST, RegistAsync);
}

export default rootSaga;
