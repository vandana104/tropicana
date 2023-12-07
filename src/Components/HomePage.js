import React from "react";
import HomeBackground from "./images/HomeBackground.png";
import Plant1 from "./images/Plant1.png";
import Plant2 from "./images/Plant2.png";
import Plant4 from "./images/Plant4.png";
import Radish from "./images/Radish.png";

const productData = [
  { name: "Aglaonema", price: 250, image: Plant1 },
  { name: "Golden King Marble", price: 340, image: Plant2 },
  { name: "Radish", price: 260, image: Radish },
  { name: "Sanservia Fernwood", price: 250, image: Plant4 },
];

const ProductCard = ({ name, price, image }) => (
  <div className="w-60 h-[327px] relative flex">
    <div className="w-60 h-[260px] left-0 top-0 absolute bg-zinc-100 rounded-[15px]" />
    <img
      className="w-[221.56px] h-[214.38px] left-[-8px] top-[33.73px] absolute origin-top-left rotate-[-1.22deg]"
      src={image}
      alt={name}
    />
    <div className="left-[17px] top-[267px] absolute text-black text-lg font-normal font-['Ubuntu'] leading-[30px]">
      {name}
      <br />${price}
    </div>
    <div className="w-[26px] h-[26px] pl-0.5 pr-px pt-0.5 pb-px left-[195px] top-[16px] absolute justify-center items-center inline-flex">
      <div className="w-[23px] h-[23px] relative flex-col justify-start items-start flex" />
    </div>
  </div>
);

function HomePage() {
  const textStyle = {
    color: "black",
    fontSize: "35px",
    fontWeight: "normal",
    fontFamily: "Ubuntu",
  };

  const boldTextStyle = {
    color: "black",
    fontSize: "40px",
    fontWeight: "bold",
    fontFamily: "Ubuntu",
  };

  return (
    <div className="w-[1440px] h-[4993px] relative bg-white">
      <div
        className="w-screen h-screen bg-cover bg-center flex items-center justify-center flex-col"
        style={{ backgroundImage: `url(${HomeBackground})` }}
      >
        <div className="text-center">
          <span style={textStyle}>Now, anyone can farm</span>
          <br />
          <span style={boldTextStyle}>Easy Plant Kits for everyone</span>
        </div>
        <div className="w-[184px] h-12 bg-green-900 rounded-[50px] ">
          <div className="items-center justify-around flex w-[184px] h-12 bg-lime-400 bg-opacity-20 rounded-[50px] backdrop-blur-[21px]">
            <div className="text-white text-base font-normal font-['Ubuntu']">
              Shop Now
            </div>
            <div className="w-[34px] h-[34px] bg-lime-600 bg-opacity-50 rounded-full backdrop-blur-[88px]" />
          </div>
        </div>
      </div>
      <div className=" w-full h-[571px] relative flex-col items-center inline-flex">
        <div className="text-black text-4xl font-medium font-['Ubuntu'] p-5">
          Our Recent Products
        </div>
        <div className="flex">
          {productData.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
