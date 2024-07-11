import './App.css';
import { useSelector } from 'react-redux';

function App() {
  const userinfo = useSelector((state)=>state.users)
  console.log(userinfo)
  const handlecreateuser=()=>{

  }
  return (
    <div className="App">
      <h1>Welcome to redux demo</h1>
      <button onClick={handlecreateuser}>create user</button>
      <hr />



    </div>
  );
}

export default App;
