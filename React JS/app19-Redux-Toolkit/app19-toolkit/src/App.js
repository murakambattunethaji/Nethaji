import { React, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createuser, deleteuser, updateuser } from './NEW-METHOD-TOOLKIT/Userslice';

const App = () => {
  const [username, setusername] = useState()
  const [index, setindex] = useState(null)
  const users = useSelector((state) => state.userdetails.users)
  const dispatch = useDispatch()
  const handlecreateuaer = () => {
    dispatch(createuser(username))
  }

  const hanledelete = (usr) => {
    dispatch(deleteuser(usr))
  }

  const handlechange = (e) => {
    setusername(e.target.value)
  }

  const hanleedit = (usr, i) => {
    setusername(usr)
    setindex(i)
  }

  const handleupdate = () => {
    dispatch(updateuser({ id: index, newuser: username }))
  }
  return (
    <div>
      <h1>welcome to redux toolkit</h1>
      <form>
        <label>user name :</label>
        <input name='usernsme' value={username} onChange={handlechange} />
      </form>
      {index === null ? (
        <button onClick={handlecreateuaer}>create user</button>
      ) : (
        <button onClick={handleupdate}>update user</button>

      )}
      <ul>
        {users.map((usr, i) => (
          <li key={i}> {usr}{""}
            <button onClick={() => { hanleedit(usr, i) }}>edit</button>

            <button onClick={() => { hanledelete(usr) }}>delete</button>{""}
          </li>))}
      </ul>
    </div>
  );
}

export default App;
