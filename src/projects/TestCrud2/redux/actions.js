import * as types from "./actionType";
import fetchUsers from "./contactApi";
import { formValues, reset } from "redux-form";

const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users,
  message: "SUCCESS: Users have been fetched",
});

const userDeleted = (userIds) => ({
  type: types.DELETE_USER,
  payload: {
    data: userIds,
    message: `SUCCESS: Successfully deleted ${userIds.length} contacts`,
},

});

const userAdded = () => ({
  type: types.ADD_USER,
});

const userUpdated = () => ({
  type: types.UPDATE_USER,
  payload: formValues,
});

const getUser = (user) => ({
  type: types.GET_SINGLE_USER,
  payload: user,
});

export const loadUsers = () => async (dispatch) => {
  try {
    const response = await fetchUsers.get("/users");
    const contacts = response.data;
        /* contacts.reverse(); */

    dispatch(getUsers(response.data));
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = (userIds) => async (dispatch) => {
  try {
    await fetchUsers.delete("/deleteEmails", {
      data: userIds,
    }); 
    dispatch(userDeleted(userIds));
    dispatch(loadUsers());
  } catch (error) {
    console.log(error);
  }
};

export const addUser = (formValues) => async (dispatch) => {
  dispatch(reset("addUser"));
  try {
    await fetchUsers.post("/emailUpload", [
        {
            ...formValues,
            listId: 480,
        },
    ]);
    await fetchUsers.get("/users");
    dispatch(userAdded());
        dispatch(loadUsers());
    } catch (error) {
      console.log(error);
    }
};

export const updateUser = (formValues) => async (dispatch) => {
  try {
    await fetchUsers.put(
      "/updateEmail",
      formValues
    );
    dispatch(userUpdated());
    dispatch(loadUsers());
  } catch (error) {
    console.log(error);
  }
};