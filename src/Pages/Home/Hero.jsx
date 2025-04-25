/** @format */

import { easeInOut } from "framer-motion";
import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsArrowDownCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
export const Hero = () => {
  return (
    <motion.div className="w-full h-screen bg-black relative">
      <motion.div className="text-white flex flex-col lg:pt-30 lg:w-full gap-15 w-full h-[100%] justify-center lg:pl-60  pl-7 ">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1], // Custom bezier curve
          }}
          className="lg:text-8xl text-4xl lg:px-3  font-semibold ">
          Designing a <span className="font-light">Better</span>
          <span className="block pt-5">
            World <span className="font-light">Today</span>{" "}
          </span>
        </motion.h1>
        <motion.p
          className="text-gray-400 lg:px-3 pr-8 lg:w-[470px]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1], // Custom bezier curve
          }}>
          welcome to our World of endless imagination and boundless creativity.
          Together, let's embark on a remarkable journey where Dreams become
          tangible realities.
        </motion.p>
        <div className=" text-black  lg:flex-row flex-col  text-xs font-semibold flex lg:gap-3 gap-6">
          <motion.button
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1], // Custom bezier curve
            }}
            className=" cursor-pointer flex bg-[#ff9800] rounded-4xl justify-center  items-center gap-8 lg:w-[200px] w-50 h-16  lg:py-4">
            WHAT WE DO{" "}
            <BsFillArrowRightCircleFill className=" lg:text-3xl text-4xl" />
          </motion.button>
          <motion.button
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1], // Custom bezier curve
            }}
            className=" cursor-pointer flex text-white rounded-4xl justify-center  items-center gap-8 lg:w-[200px] w-40 h-16  lg:py-4">
            WHAT WE DO <BsFillArrowRightCircleFill className="text-3xl " />
          </motion.button>

          <div className="rounded-full cursor-pointer  bg-[#ff9800] lg:w-15 lg:h-15  bottom-30 hidden lg:flex lg:right-70  absolute justify-center items-center ">
            <BsArrowDownCircleFill className=" lg:text-4xl  " />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
