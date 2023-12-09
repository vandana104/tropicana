import React from "react";
import Logo from "./images/logo.png";
import Logo2 from "./images/Logo2.png";
import Search from "./icons/Search.png";
import Cart from "./icons/Cart.png";
import User from "./icons/User.png";
import Dropdown from "./Dropdown";


function Navbar() {
  // console.log("working");
  //idk how to add icons from figma

  let Links = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/" },
    { name: "Services", link: "/" },
    { name: "Shop", link: "/" },
    { name: "Contact", link: "/" },
  ];

  return (
    <div className=" flex justify-between items-center top-[30px] left-[10%] absolute top-10 z-10 w-[85%] h-[60px] bg-gray-200 rounded-[50px] backdrop-blur-[53px]">
      {/* <div className="w-[1189px] h-[41px] relative"> */}
      <img className="w-[130px] h-[30px] ml-[35px]" src={Logo2} alt="Logo" />
      <div className="flex items-center">
        <div className=" text-black text-lg font-normal font-Ubuntu p-[20px] ">Home</div>
        <div className=" text-black text-lg font-normal font-Ubuntu p-[25px] ">
          About Us
        </div>
        <div className=" text-black text-lg font-normal font-Ubuntu p-[25px] ">
          Services
        </div>
        <div className="  text-black text-lg font-normal font-Ubuntu">Shop</div>
        <div className=" text-black text-lg font-normal font-Ubuntu p-[25px] ">
          Contact Us
        </div>
      </div>

      <div className="flex justify-between mr-[35px]">
        <img className="w-6 h-6" src={Search} alt="Search Icon" />
        <div className="w-4" /> {/* Add space between icons */}
        <img className="w-6 h-6" src={Cart} alt="Cart Icon" />
        <div className="w-4" /> {/* Add space between icons */}
        <Dropdown/>
      </div>
    </div>
  );
}

export default Navbar;
