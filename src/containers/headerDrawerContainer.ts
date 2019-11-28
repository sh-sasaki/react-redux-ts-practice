import { withStyles, WithTheme } from "@material-ui/core/styles";
import { RouterAction } from "connected-react-router";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { AnyAction, Dispatch } from "redux";
import { Action } from "typescript-fsa";
import HeaderDrawerActions from "../actions/headerDrawerActions";
import RouterActions from "../actions/routerActions";
import {
  headerDrawerComponent,
  OwnProps,
  styles
} from "../components/headerDrawerComponent";
import { HeaderDrawerState } from "../reducers/headerDrawerReducer";
import { AppState } from "../reducers/rootReducer";

export interface HeaderDrawerActions extends RouteComponentProps<{}> {
  selectContents: (selectedIndex: number) => Action<number>;
  pushRoot: () => RouterAction;
  pushRegister: () => RouterAction;
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return {
    selectContents: (selectedIndex: number) =>
      dispatch(HeaderDrawerActions.selectContents(selectedIndex)),
    pushRoot: () => dispatch(RouterActions.pushRoot),
    pushRegister: () => dispatch(RouterActions.pushRegister)
  };
};

const mapStateToProps = (appState: AppState) => {
  return { ...appState.headerDrawer };
};

export default withRouter<OwnProps>(
  withStyles(styles)<
    OwnProps & HeaderDrawerState & HeaderDrawerActions & WithTheme
  >(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(headerDrawerComponent)
  )
);
