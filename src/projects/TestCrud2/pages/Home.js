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
} from "../features/styled-components";
import { useActions } from "../redux/useActions";
import UserTable from "./UserTable";

const UserCrud = ({ open, onClose }) => {
  const dispatch = useDispatch();
  /* const navigate = useNavigate(); */
  const [openForm, setOpenForm] = React.useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const {
    deleteUser,
    loadUsers,
    updateUser,
    addUser,
    setUserDetails,
    cleanUserDetails,
    cleanUser,
    logout,
  } = useActions();
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
    submit: (formValues) => {
      form.close();
      if (isEditing) {
        updateUser(formValues);
      } else {
        addUser(formValues);
      }
    },
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
    view: {
      open: (user) => {
        setUserDetails(user);
      },
      close: () => cleanUserDetails(),
    },
    delete: (userIds) => {
      deleteUser(userIds);
    },
  };

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      loadUsers();
    }
    return () => {
      mounted = false;
      cleanUser();
    };
  }, [loadUsers, cleanUser]);

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
