import React from "react";
import Logo2 from "./images/Logo2.png";
import faceBook from "./icons/fb.png";
import X from "./icons/x.png";
import IG from "./icons/ig.png";

function Footer() {
  return (
    <div className=" flex items-center justify-evenly w-[100%] h-[211px] bg-stone-300">
      <div>
        {" "}
        <img className="w-[130px] h-[30px] ml-[30px]" src={Logo2} alt="Logo" />
      </div>
      <div>
        <ul className="flex">
          <li className="p-[30px]">Help</li>

          <li className="p-[30px]">Contact Us</li>

          <li className="p-[30px]">Privacy & Terms</li>
        </ul>
      </div>
      <div>
        <ul className="flex justify-evenly">
          <li className="p-[20px]">
            <img src={faceBook} alt="fb" />
          </li>
          <li className="p-[20px]">
            <img src={X} alt="fb" />
          </li>
          <li className="p-[20px]">
            <img src={IG} alt="fb" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
