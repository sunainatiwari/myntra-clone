import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import { json } from "stream/consumers";
import img1 from "../images/home_img1.png";
import img2 from "../images/jacket1.webp";
import img3 from "../images/jacket2.webp";
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <div className="p-10 flex justify-between">
      <Link to="\products">
      <div className=" p-3 ">
        <div
          style={{
            backgroundImage: `url(${img3})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "200px 200px ",
          }}
          className=" h-72 w-48 p-2 pt-48">
          <div
            className=" bg-pink-700 text-orange-100 flex flex-col items-center 
         justify-center "
          >
            <h1 className=" text-lg">Clothes</h1>
            <h1 className=" text-xl">50% off</h1>
            <h1 className=" text-lg">Shop Now</h1>
          </div>
        </div>
      </div>
      </Link>
      <Link to="\products">
      <div className=" p-3 ">
        <div
          style={{
            backgroundImage: `url(${img2})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "300px 300px ",
          }}
          className=" h-72 w-48 p-2 pt-48">
          <div
            className=" bg-pink-700 text-orange-100 flex flex-col items-center 
         justify-center "
          >
            <h1 className=" text-lg">Clothes</h1>
            <h1 className=" text-xl">50% off</h1>
            <h1 className=" text-lg">Shop Now</h1>
          </div>
        </div>
      </div>
      </Link>
      <Link to="\products">
      <div className=" p-3 ">
        <div
          style={{
            backgroundImage: `url(${img3})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "200px 200px ",
          }}
          className=" h-72 w-48 p-2 pt-48">
          <div
            className=" bg-pink-700 text-orange-100 flex flex-col items-center 
         justify-center "
          >
            <h1 className=" text-lg">Clothes</h1>
            <h1 className=" text-xl">50% off</h1>
            <h1 className=" text-lg">Shop Now</h1>
          </div>
        </div>
      </div>
      </Link>
      <Link to="\products">
      <div className=" p-3 ">
        <div
          style={{
            backgroundImage: `url(${img2})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "300px 300px ",
          }}
          className=" h-72 w-48 p-2 pt-48">
          <div
            className=" bg-pink-700 text-orange-100 flex flex-col items-center 
         justify-center "
          >
            <h1 className=" text-lg">Clothes</h1>
            <h1 className=" text-xl">50% off</h1>
            <h1 className=" text-lg">Shop Now</h1>
          </div>
        </div>
      </div>
      </Link>
      <Link to="\products">
      <div className=" p-3 ">
        <div
          style={{
            backgroundImage: `url(${img3})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "200px 200px ",
          }}
          className=" h-72 w-48 p-2 pt-48">
          <div
            className=" bg-pink-700 text-orange-100 flex flex-col items-center 
         justify-center "
          >
            <h1 className=" text-lg">Clothes</h1>
            <h1 className=" text-xl">50% off</h1>
            <h1 className=" text-lg">Shop Now</h1>
          </div>
        </div>
      </div>
      </Link>
      <Link to="\products">
      <div className=" p-3 ">
        <div
          style={{
            backgroundImage: `url(${img2})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "300px 300px ",
          }}
          className=" h-72 w-48 p-2 pt-48">
          <div
            className=" bg-pink-700 text-orange-100 flex flex-col items-center 
         justify-center "
          >
            <h1 className=" text-lg">Clothes</h1>
            <h1 className=" text-xl">50% off</h1>
            <h1 className=" text-lg">Shop Now</h1>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default Home;
