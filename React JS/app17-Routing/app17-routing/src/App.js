import './App.css';
import About from './React-Router-DOM/About';
import Home from './React-Router-DOM/Home';
import Navbar from './React-Router-DOM/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Users from './React-Router-DOM/Users';
import Pagenotefound from './React-Router-DOM/Pagenotefound';
import Protectedroute from './React-Router-DOM/Protectedroute';
import Login from './React-Router-DOM/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>

          {/* <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/> */}

          <Route path='/users' element={<Protectedroute>
            <Users />
          </Protectedroute>} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<Pagenotefound />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
