import ActionCreatorFactory from "typescript-fsa";
import { ACTIONS } from "../constants";

const actionCreator = ActionCreatorFactory();

const headerDrawerActions = {
  selectContents: actionCreator<number>(ACTIONS.SELECT_CONTENTS)
};

export default headerDrawerActions;
