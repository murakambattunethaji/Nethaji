import React, { useContext } from 'react';

// import { RoomContext } from '../Context/Rooms';
import {RoomContext} from '../Context/RoomContext'

import { Menu } from '@headlessui/react';

import { BsChevronDown } from 'react-icons/bs'

const lis = [
  { name: '0 Kids' },
  { name: '1 Kids' },
  { name: '2 Kids' },
  { name: '3 Kids' },
  { name: '4 Kids' }

];

const Kidsdropdown = () => {
 const{kids, setKids } = useContext(RoomContext)
  return <Menu as='div' className='w-full h-full bg-white relative'>

    <Menu.Button className='w-full h-full flex items-center justify-between px-8'>
      {kids === '0 kids' ? 'no kids' : kids}
      <BsChevronDown  className='text-base text-accent-hover'/>
    </Menu.Button>

    <Menu.Items as='ul' className='bg-white absolute w-full flex flex-col z-40'>
      {lis.map((li,index)=>{

        return (
          <Menu.Item onClick={()=> setKids(li.name)} as='li' className='border-b last-of-type:border-b-0 h-12 hover:bg-accent hover:text-white w-full flex justify-center items-center cursor-pointer'
           key={index}>
          {li.name}
          </Menu.Item>
        )
      })}
    </Menu.Items>
  </Menu>
};

export default Kidsdropdown;