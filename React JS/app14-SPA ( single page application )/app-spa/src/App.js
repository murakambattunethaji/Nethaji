import './App.css';
import About from './SPA-Component/About';
import Details from './SPA-Component/Details';
import Home from './SPA-Component/Home';
import Location from './SPA-Component/Location';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './SPA-Component/Navbar';
function App() {
  return (
    <div className="App">

      <Router>
        <Navbar/>
        <Routes>

          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/details' element={<Details/>}/>
          <Route path='location' element={<Location/>}/>

        </Routes>
      </Router>


      {/* <About/>
     <Details/>
     <Home/>
     <Location/> */}

    </div>
  );
}

export default App;
