import ActionCreatorFactory from "typescript-fsa";
import { ACTIONS } from "../constants";

const actionCreator = ActionCreatorFactory();

const formPracticeActions = {
  regist: actionCreator(ACTIONS.REGIST)
};

export default formPracticeActions;
