import React from 'react';

import Rooms from '../Components/Rooms'
import Bookform from '../Components/Bookform';
import Heroslider from '../Components/Heroslider';

const Home = () => {
  return (
    <>
    <Heroslider/>
      <div className='container mx-auto relative'>
        <div className='bg-accent/20 mt-4 p-4 lg:shadow-xl lg:absolute lg:left-0 lg:right-0 lg:p-0 lg:z-30 lg:top-12 '>
        <Bookform />          
        </div>
      </div>
      <Rooms />
    </>
  )
};

export default Home;