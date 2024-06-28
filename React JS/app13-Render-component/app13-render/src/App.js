import logo from './logo.svg';
import './App.css';
import Clickcounter from './Render Component/Clickcounter';
import Hovercounter from './Render Component/Hovercounter';
import Counter from './Render Component/Counter';
import { useState } from 'react';
import Clickcounter2 from './Render Component 2/Clickcounter2';
import Hovercounter2 from './Render Component 2/Hovercounter2';
import Counter2 from './Render Component 2/Counter2';

function App() {
  // const [count, setcount] = useState(0)

  // const handleincrement = () => {
  //   setcount(count + 1)
  // }




  const [count, setcount] = useState(0)

  const handleincrease = () => {
    setcount(count + 1)
  }



  return (
    <div className='App'>
      {/* <Clickcounter /> */}
      <br />
      <hr />
      {/* <Hovercounter /> */}

      {/* <Counter render={<Clickcounter count={count} handleincrement={handleincrement} />} />

      <Counter render={<Hovercounter count={count} handleincrement={handleincrement} />} /> */}

      {/* <Clickcounter2 /> */}
      {/* <Hovercounter2 /> */}



      <Counter2 render={<Clickcounter2 count={count} handleincrease={handleincrease} />} />

      <Counter2 render={<Hovercounter2 count={count} handleincrease={handleincrease} />} />


    </div>
  );
}

export default App;
