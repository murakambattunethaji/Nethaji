import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios'
import Reddyform from "./Reddy_form";
import Reddytable from "./Reddy_table";


const Reddy = () => {
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
    axios.post("http://localhost:4200/reddy", user).then(() => {
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
    axios.delete("http://localhost:4200/reddy"+usr.id).then(()=>{
      getUsersFromServer();
    })
  };
  const updateUser = () => {
    axios.put("http://localhost:4200/reddy"+user.id,user).then(()=>{
      getUsersFromServer();
      clearUser();
      setIsEdit(false);
    })
  };
  const clearUser = () => {
    setUser({
      name:"",
      email: "",
      password:"",
    });
  };
  const getUsersFromServer = () => {
    axios.get("http://localhost:4200/reddy").then(({data})=>{
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
          <Reddyform
            handleChange={handleChange}
            user={user}
            createUser={createUser}
            isEdit={isEdit}
            updateUser={updateUser}
          />
        </div>
        <div className="col-8">
          <Reddytable 
            allUsers={allUsers}
            editUser={editUser}
            deleteUser={deleteUser}/>
        </div>
      </div>
    </div>
  );
};

export default Reddy
