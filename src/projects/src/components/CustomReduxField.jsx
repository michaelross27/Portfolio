import React from "react";
import { TextField } from "@material-ui/core";

const CustomReduxField = (formProps) => {
  // de-structure props from redux form Field component
  const {
    input,
    label,
    meta,
    required,
    type,
    size = "medium",
    multiline = false,
  } = formProps;
  let extraProps = {};
  const errorMessage = meta.error;
  const isTouched = meta.touched;
  if (multiline) {
    extraProps = {
      rows: 4,
    };
  }
  return (
    <TextField
      {...input}
      {...extraProps}
      multiline={multiline}
      fullWidth
      error={isTouched && errorMessage ? true : false} // only show the error indicate when the field has been touched
      required={required}
      label={label}
      placeholder={label}
      variant="outlined"
      helperText={isTouched && errorMessage ? errorMessage : ""}
      type={type}
      size={size}
    />
  );
};
export default CustomReduxField;
