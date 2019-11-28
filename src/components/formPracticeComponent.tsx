import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import Radio from "@material-ui/core/Radio";
import { createStyles, Theme, WithStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { Field, InjectedFormProps } from "redux-form";
import { FormPracticeActions } from "../containers/formPracticeContainer";
import {
  renderCheckbox,
  renderRadioGroup,
  renderSelectField,
  renderTextField
} from "./formPartsComponents";

export const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    formControl: {
      minWidth: "100%"
    },
    typography: {
      margin: theme.spacing.unit
    }
  });

export interface OwnProps extends RouteComponentProps<{}>, React.Props<{}> {
  firstName?: string;
  lastName?: string;
  email?: string;
  sex?: string;
  favoriteColor?: string;
  employed?: boolean;
  notes?: string;
}

export type FormProps = OwnProps &
  InjectedFormProps<OwnProps> &
  FormPracticeActions &
  WithStyles<typeof styles>;

export const formPracticeComponent: React.SFC<FormProps> = (
  props: FormProps
) => {
  return (
    <div className={props.classes.root}>
      <Typography variant="headline" className={props.classes.typography}>
        フォームサンプル
      </Typography>
      <Grid container={true} justify="center">
        <Grid item={true} xs={11}>
          <form onSubmit={props.handleSubmit}>
            <Grid container={true} justify="flex-start">
              <Grid item={true} xs={4}>
                <FormControl className={props.classes.formControl}>
                  <Field
                    name="lastName"
                    component={renderTextField}
                    label="姓"
                    fullWidth={true}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container={true} justify="flex-start">
              <Grid item={true} xs={4}>
                <Field
                  name="firstName"
                  component={renderTextField}
                  label="名"
                  fullWidth={true}
                />
              </Grid>
            </Grid>
            <Grid container={true} justify="flex-start">
              <Grid item={true} xs={4}>
                <Field
                  name="email"
                  component={renderTextField}
                  label="メールアドレス"
                  fullWidth={true}
                />
              </Grid>
            </Grid>
            <Grid container={true} justify="flex-start">
              <Grid item={true} xs={4}>
                <Field name="sex" component={renderRadioGroup}>
                  <FormControlLabel
                    value="male"
                    control={<Radio color="primary" />}
                    label="男性"
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio color="primary" />}
                    label="女性"
                  />
                </Field>
              </Grid>
            </Grid>
            <Grid container={true} justify="flex-start">
              <Grid item={true} xs={4}>
                <Field
                  name="favoriteColor"
                  component={renderSelectField}
                  inputProps={{
                    id: "favoriteColor"
                  }}
                  formControlprops={props.classes.formControl}
                  label="好きな色"
                >
                  <MenuItem value="ff0000">赤</MenuItem>
                  <MenuItem value="00ff00">緑</MenuItem>
                  <MenuItem value="0000ff">青</MenuItem>
                </Field>
              </Grid>
            </Grid>
            <Grid container={true} justify="flex-start">
              <Grid item={true} xs={4}>
                <Field
                  name="employed"
                  component={renderCheckbox}
                  label="就業している"
                />
              </Grid>
            </Grid>
            <Grid container={true} justify="flex-start">
              <Grid item={true} xs={4}>
                <Field
                  name="notes"
                  component={renderTextField}
                  label="備考"
                  multiline={true}
                  rows={2}
                  fullWidth={true}
                />
              </Grid>
            </Grid>
            <br />
            <Grid container={true} justify="flex-start" spacing={16}>
              <Grid item={true} xs={2}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={props.pristine || props.submitting}
                  fullWidth={true}
                >
                  登録
                </Button>
              </Grid>
              <Grid item={true} xs={2}>
                <Button
                  variant="contained"
                  color="primary"
                  type="button"
                  disabled={props.pristine || props.submitting}
                  onClick={props.reset}
                  fullWidth={true}
                >
                  リセット
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};
