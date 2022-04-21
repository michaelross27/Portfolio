import React from "react";
import { Card, CardHeader, CardContent, Divider } from "@material-ui/core";
import Page from "src/components/Page";
import { useRegisterPasswordStyles } from "./styles";
import PasswordRegistration from "./PasswordRegistration";

const RegisterPassword = ({ history }) => {
  const classes = useRegisterPasswordStyles();
  const handleSubmit = (formValues) => {
    console.log(formValues);
  };
  return (
    <Page className={classes.root} title="Verify Account">
      <Card>
        <CardHeader title="Register Your Password" />
        <Divider />
        <CardContent className={classes.content}>
          <PasswordRegistration onSubmit={handleSubmit} />
        </CardContent>
        <Divider />
      </Card>
    </Page>
  );
};

export default RegisterPassword;
