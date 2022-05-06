import React, { useEffect, useState } from "react";
import axios from "axios";

const [ users, setUsers ] = useState([]);

const fetchUsers = async () => {
  const uri = "https://dummyjson.com/users";
  const response = await axios.get(uri);
  setUsers[response.users];
};

useEffect(() => {
  fetchUsers();
}, [])

export default fetchUsers;