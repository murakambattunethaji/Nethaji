import logo from './logo.svg';
import './App.css';
import { DigitalClock } from './Components/Digitalclock';
import { Calender } from './Components/Calender';

function App() {
  return (
    <div className="App">
     <DigitalClock/>
     <Calender/>
    </div>
  );
}

export default App;
