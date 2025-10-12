import React,{useState,useEffect} from 'react';
import {FaSun, FaMoon } from "react-icons/fa";


const NavBar = () => {
  const [darkMode, setdarkMode] = useState(false)

  useEffect(()=>{
    if(darkMode){
      document.documentElement.classList.add("dark")
    }
    else{
      document.documentElement.classList.remove("dark")
    }
  },[darkMode])

  return (
    <nav className="  shadow-sm shadow-[#5A99FF]/40 backdrop-blur-md  text-black p-4 flex justify-between items-center">
      <h1 className='cursor-pointer'><img src="/logo.png" alt="rcmndr." className="h-8 w-auto object-contain" /></h1>
      <ul className="flex gap-6">
        <li className="hover:text-[#00DDFF] cursor-pointer font-bold ">Recommend</li>
        <li className="hover:text-[#00DDFF] cursor-pointer font-bold ">About</li>
        <li className="hover:text-[#00DDFF] cursor-pointer font-bold ">Contact</li>
        <li><button onClick={()=> setdarkMode(!darkMode)} className='cursor-pointer'>{darkMode?<FaSun className="text-yellow-400 text-xl"/>:<FaMoon className="text-gray-700 text-xl"/>}</button></li>
      </ul>
      
    </nav>
  );
};

export default NavBar;
