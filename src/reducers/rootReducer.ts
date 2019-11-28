import { RouterState } from "connected-react-router";
import { combineReducers } from "redux";
import { FormStateMap, reducer as reduxFormReducer } from "redux-form";
import {
  headerDrawerReducer,
  HeaderDrawerState
} from "../reducers/headerDrawerReducer";
import { topReducer, TopState } from "../reducers/topReducer";

export interface AppState {
  top: TopState;
  headerDrawer: HeaderDrawerState;
  router: RouterState;
  form: FormStateMap;
}

export const rootReducer = combineReducers({
  top: topReducer,
  headerDrawer: headerDrawerReducer,
  form: reduxFormReducer
});
