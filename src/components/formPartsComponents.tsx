import Checkbox from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import * as React from "react";

export const renderTextField = (props: any) => {
  return (
    <TextField
      label={props.label}
      error={!!props.meta.touched && !!props.meta.error}
      helperText={!!props.meta.touched && props.meta.error}
      {...props.input}
      {...props}
    />
  );
};

export const renderCheckbox = (props: any) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={props.input.value ? true : false}
          onChange={props.input.onChange}
          color="primary"
        />
      }
      label={props.label}
    />
  );
};

export const renderRadioGroup = (props: any) => {
  return (
    <RadioGroup
      value={props.input.value}
      children={props.children}
      {...props.input}
      onChange={props.input.onChange}
    />
  );
};

export const renderSelectField = (props: any) => {
  return (
    <FormControl
      className={props.formControlprops}
      error={!!props.meta.touched && !!props.meta.error}
    >
      <InputLabel htmlFor={props.inputProps.id}>{props.label}</InputLabel>
      <Select
        value={props.input.value}
        children={props.children}
        {...props.input}
        {...props.inputProps}
        onChange={props.input.onChange}
      />
      <FormHelperText>
        {!!props.meta.touched && props.meta.error}
      </FormHelperText>
    </FormControl>
  );
};
