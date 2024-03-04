import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "../firebase/Setup";
import Navbar from "./Navbar";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [user, setUser] = useState<any>(null);
  const [otp,setOtp]=useState("");

  const sendOPT = async() => {
    try{
    const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
    const confirmation =await signInWithPhoneNumber(auth, phone, recaptcha);
    setUser(confirmation);
    }catch(err){
      console.error(err)
    }
  };

  const verifyOTP= async()=>{
    try{
      user.confirm(otp)
    }catch(err){
      console.log(err)
    }
  }

  return (
    <>
    <Navbar/>
    <div className=" bg-rose-50 h-screen flex flex-col justify-center items-center">
      <div className=" h-72 w-96 bg-white p-5">
        <h1 className=" font-bold text-lg">
          Login
          <span className=" font-normal text-sm">or</span>SignUp
        </h1>
        { user== null && <div className="mt-5">
          <PhoneInput
            country={"in"}
            value={phone}
            onChange={(phone) => setPhone(phone)}
            placeholder="Mobile No"
            buttonStyle={{ backgroundColor: "white" }}
            inputStyle={{ width: "320px" }}
          />
        </div> }
        <h1 className=" mt-4 text-xs text-gray-400">
          By clicking continue, you can
          <span className=" text-rose-500 text-sm font-bold">
            login to myntra clone
          </span>{" "}
        </h1>
        { !otp && <button
          className="mt-4 bg-rose-500  text-white font-bold py-2 px-4 rounded w-80 text-sm"
          onClick={sendOPT}
        >
          Continue
        </button> }
        <div id="recaptcha " className=" mt"></div>
       {user &&  <input
          onChange={(e)=> setOtp(e.target.value)}
          type="text"
          id="first_name"
          className="bg-gray-50 
         border border-spacing-1 outline-none text-gray-900 
         text-sm font-normal rounded-lg  mt-2 block w-80 p-2.5"
          placeholder="Enter OTP "
          required
        /> }
        {otp && <button
          className="mt-4 bg-rose-500  text-white font-bold py-2 px-4 rounded w-80 text-sm"
          onClick={verifyOTP}
        >
          Verify OTP
        </button> }
        <h1 className=" mt-4 text-xs text-gray-400">
          Have trouble logging in
          <span className=" text-rose-500 text-sm font-bold">
            CLICK CONTINUE
          </span>
        </h1>
      </div>
    </div>
    </>
  );
};

export default Login;
