import { withStyles, WithTheme } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { AnyAction, Dispatch } from "redux";
import { Action } from "typescript-fsa";
import TopActions from "../actions/topActions";
import { OwnProps, styles, topComponent } from "../components/topComponent";
import { AppState } from "../reducers/rootReducer";
import { TopState } from "../reducers/topReducer";

export interface TopActions extends RouteComponentProps<{}> {
  updateText: (v: string) => Action<string>;
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return {
    updateText: (v: string) => dispatch(TopActions.updateText(v))
  };
};

const mapStateToProps = (appState: AppState) => {
  return { ...appState.top };
};

export default withRouter(
  withStyles(styles)<OwnProps & TopState & TopActions & WithTheme>(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(topComponent)
  )
);
