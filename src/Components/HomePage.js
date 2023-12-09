import React from "react";
import HomeBackground from "./images/HomeBackground.png";
import Plant1 from "./images/Plant1.png";
import Plant2 from "./images/Plant2.png";
import Plant4 from "./images/Plant4.png";
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

import Arrow from "./icons/Arrow.png";


function HomePage() {
  return (
    <div className="w-[100%] h-auto bg-white">
      <div
        className="w-[100%] h-screen bg-center bg-cover flex items-center justify-center flex-col"
        style={{ backgroundImage: `url(${HomeBackground})` }}>
        <div className="text-center">
          <span className="text-black text-[35px] font-medium font-ubuntu">
            Now, anyone can farm
          </span>
          <br />
          <span className="text-black text-[40px] font-bold font-ubuntu">
            Easy Plant Kits for everyone
          </span>
        </div>
        <div className="w-[184px] h-12 mt-10 bg-green-900 rounded-[50px] ">
          <div className="items-center justify-around flex w-[184px] h-12 bg-lime-400 bg-opacity-20 rounded-[50px] backdrop-blur-[21px]">
            <div className="text-white text-base font-normal font-Ubuntu cursor-pointer hover:cursor-pointer">
              Shop Now
            </div>
            <div className="w-[34px] h-[34px] bg-lime-600 bg-opacity-50 rounded-full backdrop-blur-[88px]">
              <img src={Arrow} alt="Arrow" />
            </div>
          </div>
        </div>
      </div>
      {/* SECTION-----2 */}

      <div className=" w-[100%] h-auto items-center flex flex-col">
        <div className="text-black text-4xl font-medium font-Ubuntu p-6">
          Our Recent Products
        </div>
        <div className="flex space-x-10">
          <div className="flex flex-col hover:bg-lime-400 items-center">
            <div className="flex flex-col justify-center items-center hover:bg-lime-400 w-60 h-[300px] bg-zinc-100 rounded-[15px]">
              <img className="w-[150px]" src={Plant1} alt="Plant" />
            </div>
            <div className="text-black text-lg font-normal font-'Ubuntu' leading-[30px]">
              Aglaonema
              <br />$ 250
            </div>
          </div>
          <div className="flex flex-col hover:bg-lime-400 items-center">
            <div className="flex flex-col justify-center items-center hover:bg-lime-400 w-60 h-[300px] bg-zinc-100 rounded-[15px]">
              <img className="w-[200px]" src={Plant2} alt="Plant" />
            </div>
            <div className="text-black text-lg font-normal font-'Ubuntu' leading-[30px]">
              Golden King Marble
              <br />$ 340
            </div>
          </div>
          <div className="flex flex-col hover:bg-lime-400 items-center">
            <div className="flex flex-col justify-center items-center hover:bg-lime-400 w-60 h-[300px] bg-zinc-100 rounded-[15px]">
              <img className="w-[200px]" src={Radish} alt="Plant" />
            </div>
            <div className="text-black text-lg font-normal font-'Ubuntu' leading-[30px]">
              Radish
              <br />$ 260
            </div>
          </div>
          <div className="flex flex-col hover:bg-lime-400 items-center">
            <div className="flex flex-col justify-center items-center hover:bg-lime-400 w-60 h-[300px] bg-zinc-100 rounded-[15px]">
              <img className="w-[200px]" src={Plant4} alt="Plant" />
            </div>
            <div className="text-black text-lg font-normal font-'Ubuntu' leading-[30px]">
              Sanservia
              <br />$ 250
            </div>
          </div>
        </div>
      </div>

      {/* SECTION ------3 */}
      <div className="flex justify-evenly w-[100%] h-auto bg-stone-50 bg-opacity-70 mt-[50px]">
        <div className="flex flex-col">
          <div className="text-green-950 text-[40px] font-medium font-Ubuntu">
            The world's
            <br />
            1st subscription based
            <br />
            Indoor Plant Company
          </div>
          <div className="w-[407px] h-[267px] text-justify text-neutral-700 text-xl font-normal font-['Ubuntu'] leading-loose">
            The world's first subscription based Indoor Plant Company-Harvestay
            is revolutionising the way people buy and care for their plants.
            With this innovative model, customers can subscribe to a monthly
            delivery of a curated selection of healthy and vibrant plants that{" "}
          </div>
        </div>
        <div className="w-[50%]">
          <div className=" flex items-center justify-center w-[100%] h-[408px] bg-white rounded-[5px] shadow">
            <img
              className="w-[98%] h-[395px] rounded-[10px]"
              src={Section3}
              alt="Section 3"
            />
          </div>
        </div>
      </div>
      {/* SECTION-----4 */}
      <div className="w-[100%] items-center flex flex-col pb-[30px]">
        <div className="text-black text-[35px] font-medium font-'Ubuntu' py-[20px]">
          Our Services
        </div>
        <div className="flex justify-center w-[95%] space-x-4">
          <img
            className="w-[20%] h-[380px] rounded-[10px]"
            src={Section41}
            alt="Easy Plant Kits"
          />
          <img
            className="w-[20%] h-[380px] rounded-[10px]"
            src={Section42}
            alt="Landscaping"
          />
          <img
            className="w-[20%] h-[380px] rounded-[10px]"
            src={Section43}
            alt="Easy Plant Kits"
          />
          <img
            className="w-[20%] h-[380px] rounded-[10px] object-cover"
            src={Section44}
            alt="Easy Plant Kits"
          />
        </div>
      </div>
      {/* SECTION-----5 */}
      <div className="flex justify-center mt-[40px] w-[100%] h-auto space-x-20">
        <div className=" flex flex-col">
          <div className="pb-[20px]">
            <span className="text-green-900 text-[40px] font-medium font-Ubuntu">
              400+
              <br />
            </span>
            <span className="text-black text-[21px] font-semibold font-'Ubuntu'">
              PRODUCTS
              <br />
              <div className="w-[167.01px] h-[0px] border border-lime-600 border-opacity-50 " />
            </span>
          </div>
          <div className="pb-[20px]">
            <span className="text-green-900 text-[40px] font-medium font-'Ubuntu'">
              1100+
              <br />
            </span>
            <span className="text-black text-[21px] font-medium font-'Ubuntu'">
              ORDERS
              <br />
              <div className="w-[167.01px] h-[0px] border border-lime-600 border-opacity-50" />
            </span>
          </div>
          <div className="pb-[20px]">
            <span className="text-green-900 text-[40px] font-medium font-'Ubuntu'">
              1250+
              <br />
            </span>
            <span className="text-black text-[21px] font-medium font-'Ubuntu'">
              PLANT TYPES
            </span>
          </div>
        </div>
        <div>
          <img
            className="w-[350px] h-[400px]"
            src={Section5}
            alt="Lady with pot"
          />
        </div>
        <div className=" flex flex-col">
          <div className="pb-[20px]">
            <span className="text-green-900 text-[40px] font-medium font-'Ubuntu'">
              350+
              <br />
            </span>
            <span className="text-black text-[21px] font-semibold font-'Ubuntu'">
              PROJECTS DONE
              <br />
              <div className="w-[167.01px] h-[0px] border border-lime-600 border-opacity-50" />
            </span>
          </div>
          <div className="pb-[20px]">
            <span className="text-green-900 text-[40px] font-medium font-'Ubuntu'">
              400+
              <br />
            </span>
            <span className="text-black text-[21px] font-medium font-'Ubuntu'">
              HAPPY CLIENTS
              <br />
              <div className="w-[167.01px] h-[0px] border border-lime-600 border-opacity-50" />
            </span>
          </div>
          <div>
            <span className="text-green-900 text-[40px] font-medium font-'Ubuntu'">
              1250+
              <br />
            </span>
            <span className="text-black text-[21px] font-medium font-'Ubuntu'">
              PLANT TYPES
            </span>
          </div>
        </div>
      </div>
      {/* SECTION------6 */}
      <div className=" pt-[30px] pb-[30px] flex flex-col items-center justify-center w-[100%]">
        <div className="text-black text-[35px] font-medium font-'Ubuntu'">
          Testimonials
        </div>
        <div className="text-center text-black text-lg font-normal font-'Ubuntu'">
          A testimonial is an honest endorsement of your product or service that
          usually comes from
          <br />a customer, colleague, or peer who has benefited from or
          experienced success as a result
          <br />
          of the work you did for them.
        </div>
        <img className="p-[10px]" src={Rate} alt="Rate" />
        <img className="p-[5px] rounded-[50%]" src={User} alt="User" />
        <div className="text-center text-black text-lg font-normal font-'Ubuntu'">
          Luis Lara
        </div>
      </div>
      {/* SECTION------7 */}
      <div className="flex w-[100%]">
        <div className="flex justify-center items-center flex-col bg-green-900 w-[60%] h-[300px]">
          <div>
            <span className="text-white text-3xl font-normal font-'Ubuntu' capitalize leading-[52px]">
              Discover the convenience of online shopping &<br />
              the opportunity of{" "}
            </span>
            <span className="text-white text-3xl font-medium font-'Ubuntu' capitalize leading-[52px]"></span>
            <span className="text-white text-3xl font-bold font-'Ubuntu' capitalize leading-[52px]">
              franchise ownership
            </span>

            <span className="text-white text-3xl font-medium font-'Ubuntu' capitalize leading-[52px] ">
              <div className="mt-[15px]">
                <div className=" flex items-center justify-center w-[239px] h-[60px] bg-white bg-opacity-90 rounded-[45px] backdrop-blur-[30px] ">
                  <div className=" text-green-900 text-[25px] font-medium font-'Ubuntu' capitalize leading-[52px]  ">
                    Enquire Now
                  </div>
                </div>
              </div>
            </span>
          </div>
        </div>
        <img className="w-[40%] h-[300px]" src={Building} alt="Building" />
      </div>
      {/* SECTION--------8 */}
      <div className=" flex flex-col items-center  w-[90%] m-auto space-y-4 mt-[15px] ">
        <div className="text-black text-[34px] font-medium font-'Ubuntu' capitalize leading-[70px]">
          categories
        </div>
        <div className="flex  space-x-10  ">
          <div className=" flex flex-col w-[300px] h-[350px] bg-lime-400 bg-opacity-20 rounded-[30px] items-center">
            <img
              className="w-[230px] h-[230px] mt-[25px]"
              src={Plant5}
              alt=""
            />
            <div className="text-black text-[27px] font-medium font-'Ubuntu' capitalize leading-[70px]">
              Plants
            </div>
          </div>
          <div className=" flex flex-col w-[300px] h-[350px] bg-lime-400 bg-opacity-20 rounded-[30px] items-center justify-center">
            <img
              className="w-[180px] h-[180px] mt-[25px]"
              src={Pot}
              alt="Pot"
            />
            <div className="text-black text-[27px] font-medium font-'Ubuntu' capitalize leading-[70px]">
              Pot
            </div>
          </div>
          <div className=" flex flex-col w-[300px] h-[350px] bg-lime-400 bg-opacity-20 rounded-[30px] items-center justify-center">
            <img
              className="w-[250px] h-[180px] mt-[25px]"
              src={Plants}
              alt="Plants"
            />
            <div className="text-black text-[27px] font-medium font-'Ubuntu' capitalize leading-[70px]">
              Combos
            </div>
          </div>
        </div>
      </div>
      {/* SECTION------9 */}
      <div className="flex flex-col pt-[30px] pb-[100px] justify-center items-center ">
        <div className="text-black text-3xl font-medium font-'Ubuntu' capitalize leading-[70px] pb-[80px]">
          Sub categories
        </div>
        <div className="flex ">
          <div className=" flex items-center w-[416px] h-28 bg-lime-400 bg-opacity-20 rounded-[20px] ">
            <img
              className=" relative bottom-[50px] w-[150px] "
              src={Plant1}
              alt="Plant"
            />
            <div className="text-black text-3xl font-medium font-'Ubuntu' capitalize leading-[70px]">
              Flowering Plants
            </div>
          </div>
          <div className="flex items-center w-[416px] h-28 bg-lime-400 bg-opacity-20 rounded-[20px] ">
            <img
              className=" relative bottom-[50px] w-[150px] "
              src={LowLight}
              alt="Low Light Plant"
            />
            <div className="text-black text-3xl font-medium font-'Ubuntu' capitalize leading-[70px]">
              Low Light Plants
            </div>
          </div>
          <div className=" flex items-center w-[416px] h-28 bg-lime-400 bg-opacity-20 rounded-[20px] ">
            <img
              className=" relative bottom-[50px] w-[150px] "
              src={Plant4}
              alt="Plant"
            />
            <div className="text-black text-3xl font-medium font-'Ubuntu' capitalize leading-[70px]">
              Flowering Plants
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
