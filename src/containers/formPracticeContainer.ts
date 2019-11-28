import { withStyles, WithTheme } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { AnyAction, Dispatch } from "redux";
import { InjectedFormProps, reduxForm } from "redux-form";
import { Action } from "typescript-fsa";
import FormPracticeActions from "../actions/formPracticeActions";
import {
  formPracticeComponent,
  FormProps,
  OwnProps,
  styles
} from "../components/formPracticeComponent";
import { AppState } from "../reducers/rootReducer";
import FormPracticeValidator from "../validators/FormPracticeValidator";

export interface FormPracticeActions extends RouteComponentProps<{}> {
  regist: () => Action<void>;
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return {
    regist: () => dispatch(FormPracticeActions.regist())
  };
};

const mapStateToProps = (appState: AppState) => {
  return {};
};

const submit = (
  values: OwnProps,
  dispatch: Dispatch<Action<any>>,
  props: FormProps
) => {
  // tslint:disable-next-line:no-console
  console.log(values);
  // tslint:disable-next-line:no-console
  console.log(props);
  dispatch(FormPracticeActions.regist());
};

export default reduxForm({
  form: "FormPracticeForm",
  validate: FormPracticeValidator,
  onSubmit: submit,
  initialValues: { sex: "male" }
})(
  withRouter(
    withStyles(styles)<
      OwnProps & InjectedFormProps<OwnProps> & FormPracticeActions & WithTheme
    >(
      connect(
        mapStateToProps,
        mapDispatchToProps
      )(formPracticeComponent)
    )
  )
);
