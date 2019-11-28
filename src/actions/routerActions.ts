import { push } from "connected-react-router";
import { ROUTES } from "../constants";

const routerActions = {
  pushRoot: push(ROUTES.ROOT),
  pushRegister: push(ROUTES.REGISTER),
  pushRegistered: push(ROUTES.REGISTERED)
};

export default routerActions;
