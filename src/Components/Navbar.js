import React, { useEffect, useState } from "react";
import Logo2 from "./images/Logo2.png";
import Search from "./icons/Search.png";
import Cart from "./icons/Cart.png";
import Dropdown from "./Dropdown";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigation = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showSlider, setShowSlider] = useState(false);

  const toggleSlider = () => {
    setShowSlider(!showSlider);
  };

  // useEffect to update window width when it changes
  useEffect(() => {
    // Function to update window width in state
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div
        className=" flex justify-between items-center top-[30px] left-[10%] absolute top-10 z-10 w-[85%] h-[60px] bg-gray-200 rounded-[50px] backdrop-blur-[53px]"
        style={{ display: windowWidth <= 965 ? "none" : "flex" }}>
        <img
          onClick={() => navigation("/")}
          className="w-[130px] h-[30px] ml-[35px]"
          src={Logo2}
          alt="Logo"
        />
        <div className="flex items-center">
          <a
            href="/"
            className=" text-black text-lg font-normal font-Ubuntu p-[20px] ">
            Home
          </a>
          <div className=" text-black text-lg font-normal font-Ubuntu p-[25px] ">
            About Us
          </div>
          <div className=" text-black text-lg font-normal font-Ubuntu p-[25px] ">
            Services
          </div>
          <div className="  text-black text-lg font-normal font-Ubuntu">
            Shop
          </div>
          <div className=" text-black text-lg font-normal font-Ubuntu p-[25px] ">
            Contact Us
          </div>
        </div>

        <div className="flex justify-between mr-[35px]">
          <img className="w-6 h-6" src={Search} alt="Search Icon" />
          <div className="w-4" />
          <img className="w-6 h-6" src={Cart} alt="Cart Icon" />
          <div className="w-4" />
          <Dropdown />
        </div>
      </div>
      <div>
        {windowWidth <= 960 && (
          <div className=" flex flex-col pb-[10px] justify-between top-0 left-0 absolute z-10 w-[200px] ">
            <div
              className="flex pl-[20px] pt-[20px] "
              style={{
                background: showSlider ? "rgb(17 ,24 ,39,1)" : "none",
              }}>
              <div
                className="cursor-pointer text-white mr-4 lg:hidden"
                onClick={toggleSlider}>
                <div className="w-6 h-1 bg-white mb-1"></div>
                <div className="w-6 h-1 bg-white mb-1"></div>
                <div className="w-6 h-1 bg-white"></div>
              </div>
            </div>
            <div
              className={`lg:flex ${
                showSlider ? "flex" : "hidden"
              }  flex-col bg-gray-900 h-[98vh] pl-[20px] pt-[20px] `}>
              <a
                href="/"
                className="text-white pr-4 pl-2 py-2 hover:bg-gray-700">
                Home
              </a>
              <a
                href="/"
                className="text-white pr-4 pl-2 py-2 hover:bg-gray-700">
                About
              </a>
              <a
                href="/"
                className="text-white pr-4 pl-2 py-2 hover:bg-gray-700">
                Services
              </a>
              <a
                href="/"
                className="text-white pr-4 pl-2 py-2 hover:bg-gray-700">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;