import './App.css';
import Cartmanagement from './Components/Cartmanagement';
import Digitaladdressbook from './Components/Digitaladdressbook';
import Ecommerce from './Components/Ecommerce';
import Expancetracker from './Components/Expancetracker';
import Moviebooking from './Components/Moviebooking';
import Socialmedia from './Components/Socialmedia';

function App() {
  return (
    <div className="App">
      <Cartmanagement/>
      <Moviebooking/>
      <Ecommerce/>
      <Socialmedia/>
      <Expancetracker/>
      <Digitaladdressbook/>
    </div>
  );
}

export default App;
