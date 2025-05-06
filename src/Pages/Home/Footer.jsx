/** @format */

import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

import { FaBehance, FaDribbble, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-fit py-20 mt-4 flex justify-center items-center text-white bg-black">
      <div className="flex lg:flex-row lg:w-auto pl-8    w-full flex-col gap-20">
        <div className="flex flex-col lg:pr-40 gap-9 ">
          <h1 className="text-5xl">Ashley.</h1>

          <p className="text-sm text-[#FFFFFF5A] text-[16px]">
            Subscribe Our Newsletter:
          </p>

          <button className="flex lg:h-20 h-15 hover:bg-white hover:opacity-90 duration-300 hover:text-black lg:w-100 w-80 cursor-pointer  bg-[#FFFFFF1A]   items-center pl-15 lg:gap-40  gap-20 rounded-[50px]">
            Enter Our Email{" "}
            <BsFillArrowRightCircleFill className="text-4xl  text-[#ff9800]" />
          </button>

          <div className="logos flex gap-4 lg:pt-32 pt-5    ">
            <FaBehance className="hover:text-[#ff9800] text-xl" />
            <FaDribbble className="hover:text-[#ff9800] text-xl" />
            <FaTwitter className="hover:text-[#ff9800] text-xl" />
            <FaGithub className="hover:text-[#ff9800] text-xl" />
          </div>

          <p className="text-[#FFFFFF5A] ">
            © Copyright 2023 - Mil. All Rights Reserved.
          </p>
        </div>
        <ul className="flex lg:text-3xl text-fixl font-semibold flex-col gap-6">
          <li className="hover:text-[#ff9800]  w-fit  cursor-pointer lg:hover:scale-200 duration-400">
            Home{" "}
          </li>
          <li className="hover:text-[#ff9800] w-fit cursor-pointer lg:hover:scale-200 duration-400">
            Portfolio{" "}
          </li>{" "}
          <li className="hover:text-[#ff9800] w-fit cursor-pointer lg:hover:scale-200 duration-400">
            Services
          </li>
          <li className="hover:text-[#ff9800] w-fit cursor-pointer lg:hover:scale-200 duration-400">
            Contact
          </li>
          <li className="hover:text-[#ff9800] w-fit  cursor-pointer lg:hover:scale-200 duration-400">
            Blog
          </li>
          <li className="lg:pt-20 pt-8   text-2xl lg:text-lg">Canada</li>
          <li className="text-[16px] text-[#FFFFFF5A] w-60">
            71 South Los Carneros Road, California +919303338257
          </li>
        </ul>
        <ul className="flex flex-col text-[#FFFFFF5A]  gap-6">
          <li className="hover:text-white lg:hover:scale-110 duration-200">
            Privacy Policy
          </li>
          <li className="hover:text-white lg:hover:scale-110 duration-200">
            Terms and Conditions{" "}
          </li>
          <li className="hover:text-white lg:hover:scale-110 duration-200">
            Cookie Policy
          </li>
          <li className="hover:text-white lg:hover:scale-110 duration-200">
            Careers
          </li>
          <li className="lg:pt-47 pt-8  text-white">Germany</li>
          <li className="text-[16px] font-semibold w-70 ">
            Leehove 40, 2678 MC De Lier, Netherlands +919303338257
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
