import { reducerWithInitialState } from "typescript-fsa-reducers";
import TopActions from "../actions/topActions";

export interface TopState {
  text: string;
}

const initialState: TopState = {
  text: ""
};

export const topReducer = reducerWithInitialState(initialState).case(
  TopActions.updateText,
  (state, text) => {
    return { ...state, text };
  }
);
