

import React, { useState } from 'react'
import Youtube_form from './Youtube_form'
import Youtube_table from './Youtube_table'

const Youtube = () => {
  const [user, setuser] = useState({
    name: "",
    email: "",
    password: "",
  })

  const handlechange = () => { }

  const createUser = () => { }

  const editUser = () => { }

  const deleteUser = () => { }

  const updateUser = () => { }

  const clearform = () => { }

  const getUsersFromServer = () => { }


  


  return (
    <div>
      <Youtube_form handlechange={handlechange} user={user}/>
      <Youtube_table />
    </div>
  )
}

export default Youtube
