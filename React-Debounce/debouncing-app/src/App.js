

import logo from './logo.svg';
import './App.css';
import SearchBar from './Components/Searchbar';
import UserList from './Components/Userlist';

function App() {
  return (  
    <div>
      <h1>User List</h1>
      <SearchBar />
      <UserList />
    </div>
  );
}

export default App;