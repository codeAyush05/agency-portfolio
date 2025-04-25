/** @format */

import React, { useState } from "react";
import {CardData} from "./CardData";
import { motion } from "framer-motion";
import img1 from "/images/2 (2).jpg";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const sec2 = () => {
  const [isHovered, setIsHovered] = useState(null);
  return (
    <div className="w-full lg:h-[120vh] h-[260vh] bg-black flex flex-col justify-center relative items-center">
      <div className="h-[0.5px] w-75 bg-[#FFFFFF66] hidden lg:flex absolute top-35 right-0 "></div>
      <div
        className=" lg:w-[75vw] w-75  text-white  flex flex-col gap-15 absolute bottom-0"
       >
        <motion.p className="lg:w-full w-80  text-[#FFFFFF66] font-light  lg:text-end lg:pr-40"
        
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration:0.5}}>
          Professional focused on helping your brand{" "}
          <span className="block text-center  lg:text-end">
            {" "}
            grow and move forward
          </span>
        </motion.p>
        <motion.div className="flex flex-col justify-center items-center gap-5"
        
        initial={{ opacity: 0, y:   50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration:0.5}}>
          <div className="flex gap-6 items-center">
            <img
              src={img1}
              alt=""
              className="h-17 w-50 rounded-[100px] hidden lg:flex  object-cover object-top "
            />

            <h1 className=" lg:text-8xl text-4xl">
              Unique{" "}
              <span className="font-extralight text-[#FFFFFF66]">Ideas</span>
            </h1>
          </div>

          <div className="flex gap-6 items-center lg:flex-row flex-col">
            <h1 className="lg:text-8xl text-4xl lg:pb-0 pb-10">
              For your{" "}
              <span className="font-extralight text-[#FFFFFF66]">
                Buisiness.
              </span>{" "}
            </h1>
            <button className=" flex bg-[#ff9800] rounded-4xl justify-center text-black  items-center gap-8 lg:w-[200px] w-50 h-16  lg:py-4">
              WHAT WE DO{" "}
              <BsFillArrowRightCircleFill className=" lg:text-3xl text-4xl" />
            </button>
          </div>
        </motion.div>

        <div className="card-container pt-10 w-full flex lg:flex-row  flex-col  justify-center ">
          {CardData.map((item, idx) => (
            <div
              key={idx}
              className=" group relative  card lg:w-[18vw] flex flex-col gap-10 justify-center pl-8 border-[0.5px] border-[#2a292980] h-[45vh] bg-transparent"
              onMouseEnter={() => setIsHovered(idx)}
              onMouseLeave={() => setIsHovered(null)}>
              <motion.div
                className=" absolute top-0 w-full left-0 h-1 z-40 bg-[#ff9800]"
                initial={{ width: 0 }}
                animate={{ width: isHovered === idx ? "100%" : 0 }}
                transition={{ duration: 0.5, ease: "linear" }}></motion.div>
              <h1 key={idx} className="   font-semibold">
                {item.title}
              </h1>
              <p className=" lg:opacity-0 group-hover:opacity-100  px-1 lg:px-0  transition-all ease-in-out  duration-400 ">
                our creative agency is a team of Professionals focused on
                helping your brand grow
              </p>

              <div className="h-4">
                <BsFillArrowRightCircleFill className=" lg:text-xs lg:group-hover:lg:text-3xl text-3xl text-[#ff9800] lg:text-[#5b595980] lg:group-hover:text-[#ff9800] duration-400      " />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default sec2;
