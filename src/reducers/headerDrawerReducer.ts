import { reducerWithInitialState } from "typescript-fsa-reducers";
import HeaderDrawerActions from "../actions/headerDrawerActions";

export interface HeaderDrawerState {
  selectedIndex: number;
}

const initialState: HeaderDrawerState = {
  selectedIndex: 0
};

export const headerDrawerReducer = reducerWithInitialState(initialState).case(
  HeaderDrawerActions.selectContents,
  (state, selectedIndex) => {
    return { ...state, selectedIndex };
  }
);
