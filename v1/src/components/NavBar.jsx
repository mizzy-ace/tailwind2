import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const navHandler = () => {
    setNav(!nav);
  };
  return (
    <div className=" text-white w-100 h-25 flex justify-between items-center py-4 px-[20px]">
      <h1 className="font-bold md:px-[40px] text-3xl">Logis</h1>

      <ul className="hidden md:flex">
        <li className="p-4 font-bold cursor-pointer hover:bg-[#3f2ce9]">
          Home
        </li>
        <li className="p-4 font-bold hover:border-b border-[#3f2ce9] cursor-pointer hover:text-white text-gray-500">
          About
        </li>
        <li className="p-4 font-bold hover:border-b border-[#3f2ce9] cursor-pointer hover:text-white text-gray-500">
          Services
        </li>
        <li className="p-4 font-bold hover:border-b border-[#3f2ce9] cursor-pointer hover:text-white text-gray-500">
          Pricing
        </li>
        <li className="p-4 font-bold hover:border-b border-[#3f2ce9] cursor-pointer hover:text-white text-gray-500">
          Contact
        </li>
        <li className="p-4 font-bold hover:bg-[#3f2ce9] cursor-pointer bg-[#3f2ce9]">
          Get a Quote
        </li>
      </ul>

      <div className="md:hidden ">
        {nav ? (
          <AiOutlineClose onClick={navHandler} />
        ) : (
          <AiOutlineMenu onClick={navHandler} />
        )}
      </div>

      <div className={nav ? `fixed h-[100%] md:hidden bg-[#000300] w-80  left-0 top-0 ease-in duration-300` : 'hidden ease-in-out'}>
        <ul className="">
          <li className="p-4 font-bold cursor-pointer hover:bg-[#3f2ce9]">
            Home
          </li>
          <li className="p-4 font-bold hover:border-b border-[#3f2ce9] cursor-pointer hover:text-white text-gray-500">
            About
          </li>
          <li className="p-4 font-bold hover:border-b border-[#3f2ce9] cursor-pointer hover:text-white text-gray-500">
            Services
          </li>
          <li className="p-4 font-bold hover:border-b border-[#3f2ce9] cursor-pointer hover:text-white text-gray-500">
            Pricing
          </li>
          <li className="p-4 font-bold hover:border-b border-[#3f2ce9] cursor-pointer hover:text-white text-gray-500">
            Contact
          </li>
          <li className="p-4 font-bold hover:bg-[#3f2ce9] cursor-pointer bg-[#3f2ce9]">
            Get a Quote
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
