import React, { useState } from "react";
import { Grid, Button, IconButton } from "@material-ui/core";
import { Field, reduxForm } from "redux-form";
import { Visibility, VisibilityOff, Lock } from "@mui/icons-material";
import CustomReduxField from "../src/components/CustomReduxField";
import PasswordStrengthMeter from "./PasswordStrengthMeter";
import "./styles/PasswordStrengthMeter.css";

const PasswordRegistration = (props) => {
  const [password, setPassword] = useState("");
  const onSubmitPassword = (formValues) => {
    props.onSubmit(formValues);
  };
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);
  const handleShowPassword2 = () => setShowPassword2(!showPassword2);
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Register Password</DialogTitle>
      <Divider />
      <form onSubmit={onSubmitPassword} autoComplete="off">
        <DialogContent>
          <Grid container spacing={3}>
            <Grid item xs={11}>
              <Field
                name="password"
                type={showPassword ? "text" : "password"}
                label="Password"
                required
                component={CustomReduxField}
                icon={<Lock />}
                onChange={(e) => setPassword(e.target.value)}
              />
              <PasswordStrengthMeter password={password} />
            </Grid>
            <Grid item xs={1}>
              <IconButton onClick={handleShowPassword}>
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </Grid>
            <Grid item xs={11}>
              <Field
                name="password2"
                type={showPassword2 ? "text" : "password"}
                label="Re-enter Password"
                required
                component={CustomReduxField}
                icon={<Lock />}
              />
            </Grid>
            <Grid item xs={1}>
              <IconButton onClick={handleShowPassword2}>
                {showPassword2 ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                onClick={props.handleSubmit(onSubmitPassword)}
                variant="contained"
                color="primary"
                fullWidth
              >
                Register Password
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
        <Divider />
        <DialogActions>
          <div className={classes.actions}>
            {" "}
            <Button
              style={{ width: "100px" }}
              color="primary"
              variant="contained"
              type="submit"
              onClick={props.handleSubmit(onSubmit)}
            >
              Submit
            </Button>
            <Button
              color="secondary"
              variant="contained"
              type="submit"
              onClick={onClose}
            >
              Close
            </Button>
          </div>
        </DialogActions>
      </form>
    </Dialog>
  );
};
function validate(values) {
  let errors = {};
  if (!values.password) {
    errors.password = "Both Fields are Required";
  }
  if (!values.password2) {
    errors.password2 = "Both Fields are Required";
  }
  if (values.password !== values.password2) {
    errors.password = "Passwords must match";
  }
  if (values.password2 !== values.password) {
    errors.password2 = "Passwords must match";
  }
  return errors;
}
export default reduxForm({ validate, form: "passwordRegistrationForm" })(
  PasswordRegistration
);
