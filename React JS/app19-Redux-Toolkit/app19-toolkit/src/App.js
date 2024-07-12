import React from 'react'
import { useSelector } from 'react-redux'

const App = () => {
  const users = useSelector((state)=>state.userdetails.users)
  return (
    <div>
      <h1>welcome to redux toolkit</h1>
      <ul>
        {users.map((usr, i) => <li key={i}>{usr}</li>)}
      </ul>
    </div>
  );
}

export default App;
