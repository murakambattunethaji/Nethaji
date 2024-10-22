import logo from './logo.svg';
import './App.css';
import { Calender } from './Components/Calender';
import { Digitalclock } from './Components/Digitalclock';


function App() {
  return (
    <div className="App">
      <Digitalclock/>
     <Calender/>
    </div>
  );
}

export default App;
