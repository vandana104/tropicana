import React from "react";
import Background from "./images/SignUpBg.png";
function Verification() {
  return (
    <div
      className="w-[100%] h-screen bg-center bg-cover "
      style={{ backgroundImage: `url(${Background})` }}>
      <div className="flex flex-col relative top-[200px] left-[150px] space-y-7">
        <div className="text-black text-[45px] font-medium font-'Ubuntu' capitalize leading-[70px]">
          Verification
        </div>
        <div className="text-black text-[15px] font-normal font-'Gilroy-Medium'">
          Enter the code we sent through your phone number
        </div>

        <div className="flex w-[300px] justify-between">
          <div className="w-[63px] h-[63px] bg-neutral-500 bg-opacity-10 rounded-[10px] border border-black " />
          <div className="w-[63px] h-[63px] bg-neutral-500 bg-opacity-10 rounded-[10px] border border-black" />
          <div className="w-[63px] h-[63px] bg-neutral-500 bg-opacity-10 rounded-[10px] border border-black" />
          <div className="w-[63px] h-[63px] bg-neutral-500 bg-opacity-10 rounded-[10px] border border-black" />
        </div>

        <div><span className="text-black text-sm font-normal font-'Gilroy-Regular'">Didn’t Received the code </span><span className="text-blue-800 text-sm font-normal font-'Gilroy-Medium'">Resent </span></div>

        <div className="w-[350px] h-[55px] bg-lime-600 rounded-[55px] flex items-center justify-center">
          <div className="text-white text-base font-normal font-'Gilroy-SemiBold' ml-[20px]">
            Sign Up
          </div>
        </div>
        
        {/* have to reduce the space between signup and the text */}
      </div>
    </div>
  );
}

export default Verification;
