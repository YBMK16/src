import React from 'react';
import { Link } from 'react-router-dom';
import useHeader from './customHooks/useHeader';
const Logo = () => {
  return (
    <Link to='/'>
      <img
        className='h-[96] w-[96] ml-[137px] rounded-full'
        src='https://png.pngtree.com/png-vector/20220701/ourmid/pngtree-restaurant-logo-png-image_5579911.png'
        alt=''
      />
    </Link>
  );
};

const HeaderElements = () => {
  // Custom Hooks
  const headerElements = useHeader();
  return headerElements;
};

const Header = () => {
  return (
    <div className='flex flex-wrap  box-border h-[auto] w-[auto] shadow-md  sticky top-0 bg-white '>
      <Logo></Logo>
      <HeaderElements></HeaderElements>
    </div>
  );
};
export default Header;
