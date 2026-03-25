import React from 'react';
import logo from '../../assets/logo.png';
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex justify-center items-center flex-col gap-3 mt-12'>
            <img className='w-[470px] mx-auto' src={logo} alt="" />
            <p className='text-center text-accent'>Journalism Without Fear or Favour</p>
            <p className='text-accent '>{format(new Date, "EEEE, MMMM d, yyyy")}</p>
        </div>
    );
};

export default Header;