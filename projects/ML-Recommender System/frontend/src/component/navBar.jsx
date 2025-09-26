import React from 'react';

const NavBar = () => {
  return (
    <nav className="  shadow-sm shadow-[#5A99FF]/40 backdrop-blur-md  text-white p-4 flex justify-between items-center">
      <h1 className='cursor-pointer'><img src="/logo.png" alt="rcmndr." className="h-8 w-auto object-contain" /></h1>
      <ul className="flex gap-6">
        <li className="hover:text-[#00DDFF] cursor-pointer font-bold">Recommend</li>
        <li className="hover:text-[#00DDFF] cursor-pointer font-bold">About</li>
        <li className="hover:text-[#00DDFF] cursor-pointer font-bold">Contact</li>
      </ul>
    </nav>
  );
};

export default NavBar;
