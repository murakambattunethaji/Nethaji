import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import AdultsDropdown from '../Components/Adultsdropdown';
import CheckIn from '../Components/Checkin';
import CheckOut from '../Components/Checkout';
import KidsDropdown from '../Components/Kidsdropdown';

import ScrollToTop from '../Components/Scrooltotop'

import { RoomContext } from '../Context/RoomContext';

import { FaCheck } from 'react-icons/fa';



const Roomdetails = () => {
  const { rooms } = useContext(RoomContext);
  const { id } = useParams();

  const room = rooms.find((room) => {
    return room.id === Number(id);
  });

  const { name, description, facilities, imageLg, price } = room
  return (
    <section>
      <ScrollToTop />
      <div className='bg-room bg-cover bg-center h-[560px] relative flex justify-center items-center'>
        <div className='absolute w-full h-full bg-black/70'></div>
        <h1 className='text-6xl text-white z-20 font-primary text-center'>
            {name} Details
          </h1>
          </div>

        <div className='container mx-auto'>
          <div className='flex flex-col lg:flex-row h-full py-24'>
            <div className='w-full h-full px-6 lg:w-[60%]'>
             <h2 className='h2'>{name}</h2>
             <p className='mb-8'>{description}</p>
             <img className='mb-8' src={imageLg}/>

             <div className='mt-12'>
              <h3 className='h3 mb-3'>Room Facilities</h3>
              <p className='mb-12'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <div className='grid grid-cols-3 gap-6 mb-12'>
                {facilities.map((item,index) => {
                  const { name, icon } = item;
                  return(
                    <div className='flex items-center gap-x-3 flex-1' key={index}>
                    <div className='text-3xl text-accent'>{icon}</div>
                    <div className='text-base'>{name}</div>
                    </div>
                  );
                })}
              </div>
             </div>
            </div>

            <div className='w-full h-full lg:w-[40%]'>
              <div className='py-8 px-6 bg-accent/20 mb-12'>
                <div className='flex flex-col space-y-4 mb-4'>
                  <h3>Your Reservation</h3>
                  <div className='h-[60px]'>
                    <CheckIn />
                  </div>
                  <div className='h-[60px]'>
                    <CheckOut />
                  </div>
                  <div className='h-[60px]'>
                    <AdultsDropdown />
                  </div>
                  <div className='h-[60px]'>
                    <KidsDropdown />
                  </div>
                </div>
                
                <button className='btn btn-lg btn-primary w-full'>Book now for ${price}</button>

              </div>

                <div>
                  <h3 className='h3'>Hotel Rules</h3>
                  <p className='mb-6'>
                  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute ir
                  </p>
                  <ul className='flex flex-col gap-y-4'>
                    <li className='flex items-center gap-x-4'>
                      <FaCheck className='text-accent'/>
                      Check-in: 3:00 PM - 9:00 PM
                    </li>

                    <li className='flex items-center gap-x-4'>
                      <FaCheck className='text-accent'/>
                      Check-Out: 10:30 AM
                    </li>

                    <li className='flex items-center gap-x-4'>
                      <FaCheck className='text-accent'/>
                      No Pets
                    </li>

                    <li className='flex items-center gap-x-4'>
                      <FaCheck className='text-accent'/>
                     No Smoking
                    </li>
                  </ul>
                </div>

            </div>

          </div>
        </div>
    </section>
  )
};

export default Roomdetails;