import './App.css';
import Cartmanagement from './Components/Cartmanagement';
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
    </div>
  );
}

export default App;
