import React, {useState, useEffect} from 'react';



const Header = () => {
  const [header, setHeader] = useState(false);
  useEffect(() =>{
    window.addEventListener('scroll', ()=> {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
  });
  return(
    <header className={ `${header ? 'bg-white py-6 shadow-lg' : 'bg-transparent py-8'} fixed z-50 w-full transition-all duration-500`}>
      <div className='container flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0 mx-auto'> 
          {/* <a href='/'>
          {header ? (
          <img className='w-[160px]' src={LogoDark}/>
          ) : (
          <img className='w-[160px]' src={LogoWhite}/>)}
          </a> */}

          <nav className={`${header ? 'text-primary' : 'text-white'} flex gap-x-4 font-tertiary tracking-[3px] text-[15px] items-center uppercase lg:gap-x-8`}>
            <a href='' className='hover:text-accent transition'>
              Home
            </a>

            <a href='' className='hover:text-accent transition'>
              Rooms
            </a>

            <a href='' className='hover:text-accent transition'>
              Restaurant
            </a>

            <a href='' className='hover:text-accent transition'>
              spa
            </a>

            <a href='' className='hover:text-accent transition'>
              contact
            </a>
          </nav>
      </div>
    </header>
  )
};

export default Header;