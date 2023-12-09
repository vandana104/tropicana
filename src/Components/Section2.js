import React from "react";
import Radish from "./images/Radish.png";
import Section3 from "./images/Section-3.png";
import Section41 from "./images/Section4.1.png";
import Section42 from "./images/Section4.2.png";
import Section43 from "./images/Section4.3.png";
import Section44 from "./images/Section4.4.png";
import Section5 from "./images/Section5.png";
import Rate from "./images/Rating.png";
import User from "./images/User.png";
import Building from "./images/Section7.png";
import Plant5 from "./images/Section7.2.png";
import Pot from "./images/Pot.png";
import Plants from "./images/Section7.3.png";
import LowLight from "./images/Section7.1.png";
import Plant1 from "./images/Plant1.png";
import Plant2 from "./images/Plant2.png";
import Plant4 from "./images/Plant4.png";

import Arrow from "./icons/Arrow.png";



function Section2() {
  return (
    <div className=" w-[100%] h-auto items-center flex flex-col">
      <div className="text-black text-4xl font-medium font-Ubuntu p-6">
        Our Recent Products
      </div>
      <div className="flex space-x-10">
        <div className="flex flex-col justify-center items-center w-60 h-[260px] bg-zinc-100 rounded-[15px]">
          <img className="w-[200px]" src={Plant1} alt="Plant" />
          <div className="text-black text-lg font-normal font-'Ubuntu' leading-[30px]">
            Aglaonema
            <br />$ 250
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-60 h-[260px] bg-zinc-100 rounded-[15px]">
          <img className="w-[200px]" src={Plant2} alt="Plant" />
          <div className="text-black text-lg font-normal font-'Ubuntu' leading-[30px]">
            Golden King Marble
            <br />$ 340
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-60 h-[260px] bg-zinc-100 rounded-[15px]">
          <img className="w-[200px]" src={Radish} alt="Plant" />
          <div className="text-black text-lg font-normal font-'Ubuntu' leading-[30px]">
            Radish
            <br />$ 260
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-60 h-[260px] bg-zinc-100 rounded-[15px]">
          <img className="w-[200px]" src={Plant4} alt="Plant" />
          <div className="text-black text-lg font-normal font-'Ubuntu' leading-[30px]">
            Sanservia
            <br />$ 250
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
