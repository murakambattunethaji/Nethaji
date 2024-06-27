

import React, { useState } from 'react'
import Youtube_form from './Youtube_form'
import Youtube_table from './Youtube_table'
import axiox from 'axios'

const Youtube = () => {
  const [user, setuser] = useState({
    name: "",
    email: "",
    password: "",
  })

  const handlechange = (e) => {
    const newuser = { ...user }
    newuser[e.target.name] = e.target.value
    setuser(newuser)
  }

  const createUser = () => {
    axiox.post("http://localhost:4200/nethaji", user).then(() => {
      clearform()
    })
  }

  const editUser = () => { }

  const deleteUser = () => { }

  const updateUser = () => { }

  const clearform = () => {
    setuser({
      name: "",
      email: "",
      password: "",
    })
  }

  const getUsersFromServer = () => { }





  return (
    <div>
      <Youtube_form handlechange={handlechange} user={user} createUser={createUser} />
      <Youtube_table />
    </div>
  )
}

export default Youtube
