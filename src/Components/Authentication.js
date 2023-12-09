import React, { useEffect, useState } from "react";
import Background from "./images/SignUpBg.png";
import { useLocation } from "react-router-dom";

function Authentication() {
  const location = useLocation();
  const [header, setHeader] = useState("");

  useEffect(() => {
    if (location.pathname === "/login") {
      setHeader("Login");
    } else if (location.pathname === "/signUp") {
      setHeader("Create Account");
    } else {
      setHeader("Verification");
    }
  }, [location.pathname]);

  const [otp, setOtp] = useState(["", "", "", ""]);
  const otpInputRefs = Array.from({ length: 4 }, () => React.createRef());

  const handleOtpChange = (e, index) => {
    const value = e.target.value;

    if (e.code === "Backspace" && index > 0) {
      otpInputRefs[index - 1].current.focus();
      return;
    }

    const cleanedValue = value.replace(/\D/g, "");

    const newOtp = [...otp];
    newOtp[index] = cleanedValue;

    setOtp(newOtp);

    if (cleanedValue !== "" && index < otpInputRefs.length - 1) {
      otpInputRefs[index + 1].current.focus();
    }
  };

  return (
    <div
      className="w-[100%] h-screen bg-center bg-cover "
      style={{ backgroundImage: `url(${Background})` }}>
      <div className="flex flex-col mb-[10px] absolute top-[155px] left-[12%] space-y-7">
        <div className="text-black text-[45px] font-medium font-'Ubuntu' capitalize leading-[70px]">
          {header}
        </div>

        {header === "Verification" ? (
          <div className="flex flex-col ">
            <div className="text-black text-[15px] font-normal font-'Gilroy-Medium'">
              Enter the code we sent through your phone number
            </div>
            <div className="mt-[30px]">
              <div className="flex ">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    value={digit}
                    onChange={(e) => handleOtpChange(e, index)}
                    maxLength={1}
                    ref={otpInputRefs[index]}
                    className="w-12 h-12 text-3xl border border-gray-300 rounded mx-1 px-2 outline-none"
                    onKeyDown={(e) => handleOtpChange(e, index)}
                  />
                ))}
              </div>
              <br />
              <div>
                <span className="text-black text-sm font-normal font-'Gilroy-Regular'">
                  Didn't Received the code{" "}
                </span>
                <span className="text-blue-800 text-sm font-normal font-'Gilroy-Medium'">
                  Resent{" "}
                </span>
              </div>
            </div>
          </div>
        ) : (
          <>
            {" "}
            <div className="w-[567px] h-[71px] bg-white rounded-[10px] flex items-center">
              <input
                type="email"
                className="w-[80%] h-[25px] text-black text-[15px] font-normal font-'Gilroy-Medium' tracking-tight ml-[20px]"
                placeholder="Email"
              />
            </div>
            {header === "Create Account" && (
              <div className="w-[567px] h-[71px] bg-white rounded-[10px] flex items-center">
                <input
                  type="number"
                  className="w-[80%] h-[25px] text-black text-[15px] font-normal font-'Gilroy-Medium' tracking-tight ml-[20px]"
                  placeholder="Phone Number"
                />
              </div>
            )}
            <div className="w-[567px] h-[71px] bg-white rounded-[10px] flex justify-between items-center">
              <input
                type="password"
                className="w-[90%] h-[25px] text-black text-opacity-80 text-[15px] font-normal font-'Gilroy-Medium' tracking-tight ml-[20px]"
                placeholder="Password"
              />
            </div>
          </>
        )}

        <div className="w-[350px] h-[55px] bg-lime-600 rounded-[55px] flex items-center justify-center">
          <a
            href={header === "Create Account" ? "/verify" : "/"}
            className="text-white text-base font-normal font-'Gilroy-SemiBold' ml-[20px] cursor-pointer hover:cursor-pointer">
            {header === "Create Account" ? "Sign Up" : "Log In"}
          </a>
        </div>
        <div className="w-[278px] h-[19px] mb-[30px]">
          <span className="text-black text-[13px] font-normal font-'Gilroy-Regular'">
            {header === "Create Account"
              ? "Already have an account?"
              : "Don't have an account?"}
          </span>
          <a
            href={header === "Create Account" ? "/login" : "/signUp"}
            className="text-orange-600 text-[13px] font-normal font-'Gilroy-Medium' cursor-pointer hover:cursor-pointer">
            {header === "Create Account" ? "Login" : "Signup"}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Authentication;
