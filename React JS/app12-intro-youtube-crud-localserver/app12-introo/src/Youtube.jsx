import React, { useEffect, useState } from 'react'
import Youtube_form from './Youtube_form'
import Youtube_table from './Youtube_table'
import axios from 'axios'



const Youtube = () => {
  const [user, setuser] = useState({
    name: "",
    email: "",
    password: "",
  })

  const [alluser, setalluser] = useState([])

  const [isedit, setisedit] = useState(false)


  const handlechange = (e) => {
    const newuser = { ...user }
    newuser[e.target.name] = e.target.value
    setuser(newuser)
  }

  useEffect(() => {
    getUsersFromServer()
  }, [])

  const createUser = () => {
    axios.post("http://localhost:4200/nethaji", user).then(() => {
      clearform()
    })
  }

  const editUser = (usr) => {
    setuser(usr)
    setisedit(true)
  }

  const deleteUser = (usr) => {
    axios.delete("http://localhost:4200/nethaji" + usr.id).then(() => {
      getUsersFromServer()

    })
  }

  const updateUser = () => {
    axios.put("http://localhost:4200/nethaji" + user.id, user).then(() => {
      getUsersFromServer()
      clearform()
      setisedit(false)
    })
  }

  const clearform = () => {
    setuser({
      name: "",
      email: "",
      password: "",
    })
  }

  const getUsersFromServer = () => {
    axios.get("http://localhost:4200/nethaji").then(({ data }) => {
      setalluser(data)

    })
  }





  return (
    <div>
      <Youtube_form handlechange={handlechange}
        user={user}
        createUser={createUser}
        isedit={isedit}
        updateUser={updateUser}
      />


      <Youtube_table alluser={alluser}
        editUser={editUser}
        deleteUser={deleteUser}
      />
    </div>
  )
}

export default Youtube
