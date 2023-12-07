import React from "react";
import Logo from "./images/logo.png";
import Search from "./icons/Search.png";
import Cart from "./icons/Cart.png";
import User from "./icons/User.png";

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
    <div className="w-[1278px] h-[94px] bg-gray-200 rounded-[50px] backdrop-blur-[53px]">
      <div className="w-[1189px] h-[41px] relative">
        <img className="w-[229px] h-[72px]" src={Logo} alt="Logo" />
        <div className="left-[428px] top-[17px] absolute text-black text-lg font-normal font-['Ubuntu']">
          Home
        </div>
        <div className="left-[515px] top-[17px] absolute text-black text-lg font-normal font-['Ubuntu']">
          About Us
        </div>
        <div className="left-[626px] top-[17px] absolute text-black text-lg font-normal font-['Ubuntu']">
          Services
        </div>
        <div className="left-[728px] top-[17px] absolute text-black text-lg font-normal font-['Ubuntu']">
          Shop
        </div>
        <div className="left-[807px] top-[17px] absolute text-black text-lg font-normal font-['Ubuntu']">
          Contact Us
        </div>
        <div className="w-6 h-6 left-[1051px] top-[11px] absolute" />
        <div className="w-6 h-6 p-0.5 left-[1108px] top-[11px] absolute justify-center items-center inline-flex">
          <div className="w-5 h-5 relative flex justify-between">
            <img src={Search} alt="Search Icon" />
            <img src={Cart} alt="Cart Icon" />
            <img src={User} alt="User Icon" />
          </div>
        </div>
        <div className="w-6 h-6 left-[1165px] top-[11px] absolute" />
      </div>
    </div>
  );
}

export default Navbar;
