import logo from './logo.svg';
import './App.css';
import Clickcounter from './Render Component/Clickcounter';
import Hovercounter from './Render Component/Hovercounter';
import Counter from './Render Component/Counter';
import { useState } from 'react';

function App() {
  const [count, setcount] = useState(0)

  const handleincrement = () => {
    setcount(count + 1)
  }
  return (
    <div className='App'>
      {/* <Clickcounter /> */}
      <br />
      <hr />
      {/* <Hovercounter /> */}

      <Counter render={<Clickcounter count={count} handleincrement={handleincrement} />} />

      <Counter render={<Hovercounter count={count} handleincrement={handleincrement} />} />

    </div>
  );
}

export default App;
