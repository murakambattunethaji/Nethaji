import React, { useState } from 'react'
import Form from './Form'
import Table from './Table'

const Main = () => {

  const [user, setuser] = useState({
    fname:'',
    lname:'',
    dob:'',
    email:'',
    password:'',
    checked:'',

  })

  const createuser = () => { }

  const edituser = () => { }

  const deleteuser = () => { }

  const clearform = () => { }

  const handlechange = (e) => {
    console.log(e)
   }

  const getserverfromdata = () => { }

  const updateuser = () => { }

  return (
    <div>

      <Form handlechange={handlechange} user={user}/>

      <Table />

    </div>
  )
}

export default Main
