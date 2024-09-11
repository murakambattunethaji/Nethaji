import React, { useContext } from 'react';
import Adultsdropdown from '../Components/Adultsdropdown'
import Kidsdropdown from '../Components/Kidsdropdown'
import Checkin from '../Components/Checkin'
import Checkout from '../Components/Checkout'
import { Form } from 'react-router-dom';
import { RoomContext } from '../Context/RoomContext';

const Bookform = () => {
  const {handleClick} = useContext(RoomContext)
  return (
    <form className='h-[300px] w-full lg:h-[70px]'>
      <div className='flex flex-col w-full h-full lg:flex-row '>
        <div className='flex-1 border-r '>
          <Checkin />
        </div>
        <div className='flex-1 border-r'>
          <Checkout />
        </div>
        <div className='flex-1 border-r'>
          <Adultsdropdown />
        </div>
        <div className='flex-1 border-r'>
          <Kidsdropdown />
        </div>

        <button onClick={(e) => handleClick(e)} type='submit' className='btn btn-primary'>
          Check Now
        </button>
      </div>
    </form>
  )
};

export default Bookform;