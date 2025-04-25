/** @format */

import React from "react";
import img1 from "/images/4.jpg";
import quote from "/images/qu.svg";
import a from "/images/1.svg";
import b from "/images/2.svg";

import { motion } from "framer-motion";

// bg-[rgb(242, 242, 242)]

const Sec4 = () => {
  return (
    <div className="lg:h-[140vh] h-[190vh] w-full  justify-center items-center flex flex-col  mt-20 bg-gray-100 relative">
      <div className="h-[1px] w-85 bg-gray-400 hidden lg:flex absolute top-40    right-0 ">
        {" "}
      </div>

      <div className="lg:w-[75vw] w-75 text-black justify-center items-center flex flex-col   ">
        <motion.p
          className="lg:w-full w-90 text-center   text-black font-light  lg:text-end lg:pr-40"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          customer rewievs are valuable sources{" "}
          <span className="block text-center  lg:text-end">
            {" "}
            of information for both buissiness and consumers.
          </span>
        </motion.p>

        <div className="flex lg:w-160    w-80 text-center items-center pt-15">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className=" lg:text-[70px] text-4xl">
            Customer
            <span className="font-extralight "> Voices:</span>
            <span> Hear What</span>
            <span className=" font-extralight "> They Say!</span>{" "}
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex gap-3  h-110 lg:h-50 items-center lg:justify-between justify-center   pt-15  w-90 lg:flex-row flex-wrap  lg:w-230">
          <div className="bg-[#ff9800]  w-22 h-22 rounded-full flex items-center justify-center">
            <div className=" h-20 w-20 rounded-full border-5  border-white overflow-hidden">
              <img src={img1} alt="" className="h-20 w-20" />
            </div>
          </div>
          <div className="bg-[#ff9800] w-22 h-22 mt-9 rounded-full flex items-center justify-center">
            <div className=" h-20 w-20 rounded-full border-5  border-white overflow-hidden">
              <img src={img1} alt="" className="h-20 w-20" />
            </div>
          </div>
          <div className="bg-[#ff9800]  w-22 h-22 rounded-full flex items-center justify-center">
            <div className=" h-20 w-20 rounded-full border-5  border-white overflow-hidden">
              <img src={img1} alt="" className="h-20 w-20" />
            </div>
          </div>
          <div className="bg-[#ff9800] w-22 h-22 mt-9 rounded-full flex items-center justify-center">
            <div className=" h-20 w-20 rounded-full border-5  border-white overflow-hidden">
              <img src={img1} alt="" className="h-20 w-20" />
            </div>
          </div>
          <div className="bg-[#ff9800]  w-22 h-22 rounded-full flex items-center justify-center">
            <div className=" h-20 w-20 rounded-full border-5  border-white overflow-hidden">
              <img src={img1} alt="" className="h-20 w-20" />
            </div>
          </div>
          <div className="bg-[#ff9800] w-22 h-22 mt-9 rounded-full flex items-center justify-center">
            <div className=" h-20 w-20 rounded-full border-5  border-white overflow-hidden">
              <img src={img1} alt="" className="h-20 w-20" />
            </div>
          </div>
          <div className="bg-[#ff9800]  w-22 h-22 rounded-full flex items-center justify-center">
            <div className=" h-20 w-20 rounded-full border-5  border-white overflow-hidden">
              <img src={img1} alt="" className="h-20 w-20" />
            </div>
          </div>
        </motion.div>

        <div className=" flex flex-col gap-9 items-center justify-center pt-20 pb-6">
          <motion.ul
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center flex-col">
            <img src={quote} alt="" className="h-[50px] " />
            <li className="pt-5 text-xl font-semibold pb-3">Emma Trueman</li>
            <li className="text-[#00000080] font-extralight">Envato Market</li>
          </motion.ul>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-200 w-80 leading-9 text-[#00000080] text-center text-xl lg:text-2xl">
            I had the pleasure of working with this creative agency, and I must
            say, they truly impressed me. They consistely think outside the box,
            resulting in impressive and impactfull work. I highly recommed this
            agency for their consistent delivery of exceptional creative
            solutions.
          </motion.p>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-evenly  pt-30 w-full">
        <img src={a} alt="" className="h-6" />
        <img src={b} alt="" className="h-6" />
        <img src={a} alt="" className="h-6 hidden lg:flex" />
        <img src={b} alt="" className="h-6 hidden lg:flex" />
        <img src={a} alt="" className="h-6 hidden lg:flex" />
      </motion.div>
    </div>
  );
};

export default Sec4;
