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

const productData = [
  { name: "Aglaonema", price: 250, image: Plant1 },
  { name: "Golden King Marble", price: 340, image: Plant2 },
  { name: "Radish", price: 260, image: Radish },
  { name: "Sanservia Fernwood", price: 250, image: Plant4 },
];

const ProductCard = ({ name, price, image }) => (
  <div className="w-[100%] h-auto flex">
    {/* Actually that rounded card is present here ,remove the flex above here */}
    <div className="flex flex-col w-[100%] h-[260px] left-0 top-0 bg-zinc-100 rounded-[15px]" />
    <div className="flex flex-col">
      {/* have added a div and flex-col , thats y  the card came like a row*/}
      <img
        className="w-[100%] h-[214.38px] left-[-8px] top-[33.73px] origin-top-left rotate-[-1.22deg]"
        src={image}
        alt={name}
      />
      <div className="left-[17px] top-[267px]text-black text-lg font-normal font-['Ubuntu'] leading-[30px]">
        {name}
        <br />${price}
      </div>
    </div>
    <div className="w-[26px] h-[26px] pl-0.5 pr-px pt-0.5 pb-px left-[195px] top-[16px] justify-center items-center inline-flex">
      <div className="w-[23px] h-[23px]flex-col justify-start items-start flex" />
    </div>
  </div>
);

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
            <div className="text-white text-base font-normal font-Ubuntu">
              Shop Now
            </div>
            <div className="w-[34px] h-[34px] bg-lime-600 bg-opacity-50 rounded-full backdrop-blur-[88px]">
              <img src={Arrow} alt="Arrow" />
            </div>
          </div>
        </div>
      </div>
      {/* SECTION-----2 */}

      <div className=" w-[100%] h-auto flex-col items-center flex">
        <div className="text-black text-4xl font-medium font-Ubuntu p-6">
          Our Recent Products
        </div>
        <div className="flex w-[80%] justify-between h-autopb-[40px]">
          {productData.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
      {/* NEEDS atlest 50px down to add hover effect  to bottm */}
      {/* SECTION ------3 */}
      <div className="flex justify-evenly w-[100%] h-auto bg-stone-50 bg-opacity-70">
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
        {/* padding bottom not working */}
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
            alt="Easy Plant Kits"
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
          {/* Try to find another image */}
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
              {/* needs a gap */}
            </span>
            <span className="text-white text-3xl font-medium font-'Ubuntu' capitalize leading-[52px]  ">
              <div className=" flex items-center justify-center w-[239px] h-[60px] bg-white bg-opacity-90 rounded-[45px] backdrop-blur-[30px]">
                <div className=" text-green-900 text-[25px] font-medium font-'Ubuntu' capitalize leading-[52px] ">
                  Enquire Now
                  {/* this button needs a pt */}
                </div>
              </div>
            </span>
          </div>
        </div>
        <img className="w-[40%] h-[300px]" src={Building} alt="Building" />
      </div>
      {/* SECTION--------8 */}
      <div className=" flex flex-col items-center  w-[90%] m-auto space-y-4 ">
        <div className="text-black text-[34px] font-medium font-'Ubuntu' capitalize leading-[70px]">
          categories
        </div>
        <div className="flex  space-x-10  ">
          <div className=" flex flex-col w-[300px] h-[350px] bg-lime-400 bg-opacity-20 rounded-[30px] items-center">
            <img className="w-[250px] h-[280px]" src={Plant5} alt="" />
            <div className="text-black text-[27px] font-medium font-'Ubuntu' capitalize leading-[70px]">
              Plants
            </div>
          </div>
          <div className=" flex flex-col w-[300px] h-[350px] bg-lime-400 bg-opacity-20 rounded-[30px] items-center justify-center">
            <img className="w-[180px] h-[180px]" src={Pot} alt="Pot" />
            <div className="text-black text-[27px] font-medium font-'Ubuntu' capitalize leading-[70px]">
              Pot
            </div>
          </div>
          <div className=" flex flex-col w-[300px] h-[350px] bg-lime-400 bg-opacity-20 rounded-[30px] items-center justify-center">
            <img className="w-[250px] h-[180px]" src={Plants} alt="Plants" />
            <div className="text-black text-[27px] font-medium font-'Ubuntu' capitalize leading-[70px]">
              Combos
            </div>
          </div>
        </div>
      </div>
      {/* SECTION------9 */}
      <div className="flex flex-col pb-[100px]">
        <div className="text-black text-3xl font-medium font-'Ubuntu' capitalize leading-[70px] pb-[80px]">
          Sub categories
        </div>
        <div className="flex">
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
              Flowering Plants
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
