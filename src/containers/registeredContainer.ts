import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { AnyAction, Dispatch } from "redux";
import { registeredComponent } from "../components/registeredComponent";
import { AppState } from "../reducers/rootReducer";

export interface RegisteredActions extends RouteComponentProps<{}> {}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return {};
};

const mapStateToProps = (appState: AppState) => {
  return {};
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(registeredComponent)
);
