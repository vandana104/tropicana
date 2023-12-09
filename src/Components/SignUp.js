import React from "react";
import Background from "./images/SignUpBg.png";
import Password from "./icons/Password.png";

function SignUp() {
  return (
    <div
      className="w-[100%] h-screen bg-center bg-cover "
      style={{ backgroundImage: `url(${Background})` }}>
      <div className="flex flex-col relative top-[200px] left-[150px] space-y-7">
        <div className="text-black text-[45px] font-medium font-'Ubuntu' capitalize leading-[70px]">
          Create Account
        </div>
        <div className="w-[567px] h-[71px] bg-white rounded-[10px] flex items-center ">
          <div className=" w-[69px] h-[25px] text-black text-opacity-80 text-[15px] font-normal font-'Gilroy-Medium' tracking-tight ml-[20px]">
            Name
          </div>
        </div>

        <div className="w-[567px] h-[71px] bg-white rounded-[10px] flex items-center ">
          <div className="w-[171px] text-black text-opacity-80 text-[15px] font-normal font-'Gilroy-Medium' tracking-tight ml-[20px]">
            Phone Number
          </div>
        </div>

        <div className="w-[567px] h-[71px] bg-white rounded-[10px] flex justify-between flex items-center ">
          <div className="w-[110px] h-[25px] text-black text-opacity-80 text-[15px] font-normal font-'Gilroy-Medium' tracking-tight ml-[20px]">
            Password
          </div>
          <img
            src={Password}
            className="w-8 h-[31px] relative mr-[20px]"
            alt="Password"
          />
        </div>

        <div className="w-[350px] h-[55px] bg-lime-600 rounded-[55px] flex items-center justify-center">
          <div className="text-white text-base font-normal font-'Gilroy-SemiBold' ml-[20px]">
            Sign Up
          </div>
        </div>
        <div className="w-[278px] h-[19px]">
          <span className="text-black text-[13px] font-normal font-'Gilroy-Regular'">
            Already have an account?{" "}
          </span>
          <span className="text-orange-600 text-[13px] font-normal font-'Gilroy-Medium'">
            Sign in
          </span>
        </div>
        {/* have to reduce the space between signup and the text */}
      </div>
    </div>
  );
}

export default SignUp;
