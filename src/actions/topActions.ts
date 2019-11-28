import ActionCreatorFactory from "typescript-fsa";
import { ACTIONS } from "../constants";

const actionCreator = ActionCreatorFactory();

const topActions = {
  updateText: actionCreator<string>(ACTIONS.UPDATE_TEXT)
};

export default topActions;
