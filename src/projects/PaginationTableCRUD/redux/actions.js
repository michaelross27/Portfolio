import * as types from "./actionType";
import https from "./contactApi";
import { formValues, reset } from "redux-form";
import { accessManagement as iam } from "../utils/accessManagement";

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
    const response = await https.get("/users");
    const contacts = response.data;
        /* contacts.reverse(); */

    dispatch(getUsers(response.data));
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = (userIds) => async (dispatch) => {
  try {
    await https.delete("/deleteEmails", {
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
    await https.post("/emailUpload", [
        {
            ...formValues,
            listId: 480,
        },
    ]);
    await https.get("/users");
    dispatch(userAdded());
        dispatch(loadUsers());
    } catch (error) {
      console.log(error);
    }
};

export const updateUser = (formValues) => async (dispatch) => {
  try {
    await https.put(
      "/updateEmail",
      formValues
    );
    dispatch(userUpdated());
    dispatch(loadUsers());
  } catch (error) {
    console.log(error);
  }
};

export const setUserDetails = (user) => (dispatch) =>
    dispatch({ type: types.SET_USER_DETAILS, payload: user });

export const cleanUserDetails = () => (dispatch) =>
    dispatch({ type: types.CLEAN_USER_DETAILS });

export const cleanUser = () => (dispatch) =>
    dispatch({ type: types.CLEAN_USER });

