import { delay } from "redux-saga";
import { call, put, select } from "redux-saga/effects";
import routerActions from "../actions/routerActions";
import { AppState } from "../reducers/rootReducer";

const getFormPracticeForm = (state: AppState) => {
  return state.form.FormPracticeForm.values;
};

function* registAsync() {
  // tslint:disable-next-line:no-console
  yield console.log("saga_start");
  const state = yield select(getFormPracticeForm);
  // tslint:disable-next-line:no-console
  yield console.log(state);
  yield call(delay, 1000);
  // tslint:disable-next-line:no-console
  yield console.log("saga_end");
  yield put(routerActions.pushRegistered);
}

export default registAsync;
