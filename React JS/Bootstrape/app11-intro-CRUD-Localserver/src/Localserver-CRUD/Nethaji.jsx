import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Nethajiform from "./Nethaji.form";
import Nethajitable from "./Nethaji_table";
const Nethaji = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [allUsers,setAllUsers] = useState([]);
  const [isEdit,setIsEdit] = useState(false);

  useEffect(()=>{
    getUsersFromServer()
  },[])
  const createUser = () => {
    axios.post("", user).then(() => {
      console.log("User Added Successfully !!!");
      clearUser();
      getUsersFromServer();
    });
  };
  const editUser = (usr) => {
    setUser(usr);
    setIsEdit(true);
  };
  const deleteUser = (usr) => {
    axios.delete(""+usr.id).then(()=>{
      getUsersFromServer();
    })
  };
  const updateUser = () => {
    axios.put(""+user.id,user).then(()=>{
      getUsersFromServer();
      clearUser();
      setIsEdit(false);
    })
  };
  const clearUser = () => {
    setUser({
      email: "",
      password: "",
    });
  };
  const getUsersFromServer = () => {
    axios.get("").then(({data})=>{
      setAllUsers(data)
    })
  };
  const handleChange = (e) => {
    const newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <Nethajiform
            handleChange={handleChange}
            user={user}
            createUser={createUser}
            isEdit={isEdit}
            updateUser={updateUser}
          />
        </div>
        <div className="col-8">
          <Nethajitable 
            allUsers={allUsers}
            editUser={editUser}
            deleteUser={deleteUser}/>
        </div>
      </div>
    </div>
  );
};

export default Nethaji
