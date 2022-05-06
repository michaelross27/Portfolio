import React, { useEffect, useState } from "react";
import { Grid, Button } from "@material-ui/core";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Fab,
  Tooltip,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { initialize, reset } from "redux-form";
import _ from "lodash";
import {
  FloatingActionButtonContainer,
  FloatingButtonSpacer,
} from "./features/styled-components";
import UserTable from "./components/UserTable";

const UserCrud = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const [openForm, setOpenForm] = React.useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const handleClose = () => {
    onClose();
  };

  const { users } = useSelector((state) => state.users);
  const { details: userDetails } = useSelector((state) => state.users);
  const form = {
    open: () => setOpenForm(true),
    close: () => {
      dispatch(reset("userForm"));
      setOpenForm(false);
    },
  };
  const actions = {
    create: () => {
      setIsEditing(false);
      dispatch(initialize("userForm", {}));
      form.open();
    },
    edit: (user) => {
      setIsEditing(true);
      dispatch(initialize("userForm", user));
      form.open();
    },
  };


  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Active Users</DialogTitle>
      <Divider />
      <DialogContent>
        <Grid container spacing={3}>
          <div>
            <UserTable
              data={users.map((user) => ({
                ..._.omit(user, ["listId"]),
              }))}
              onDelete={actions.delete}
            />

            <FloatingActionButtonContainer>
              <FloatingButtonSpacer>
                <Tooltip title="Add new contact">
                  <Fab color="primary" onClick={actions.create}>
                    <Add />
                  </Fab>
                </Tooltip>
              </FloatingButtonSpacer>
            </FloatingActionButtonContainer>
          </div>
        </Grid>
      </DialogContent>
      <Divider />
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default UserCrud;
