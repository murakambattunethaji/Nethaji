import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { createuseraction, deleteuseraction, readuseraction } from './STORE/Action';
import { useEffect, useState } from 'react';

function App() {
  const userinfo = useSelector((state) => state.users)
  const dispatch = useDispatch()
  console.log(userinfo)
  const handlecreateuser = () => {
    dispatch(createuseraction("ramu"))
  }

  const readusers = () => {
    dispatch(readuseraction())
  }

  useEffect(() => {
    readusers()
  }, [])

  const handledelete = (usr) => {
    dispatch(deleteuseraction(usr))
  }
  return (
    <div className="App">
      <h1>Welcome to redux demo</h1>
      <button onClick={handlecreateuser}>create user</button>
      <hr />

      <ul>
        {userinfo.map((usr, i) => <li key={i}>{usr} <button onClick={() => { handledelete(usr) }}>delete</button></li>)}
      </ul>

    </div>
  );
}

export default App;
