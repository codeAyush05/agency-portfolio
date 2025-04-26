/** @format */
import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa6";
import { hover, motion } from "framer-motion";
import { useState } from "react";
import img11 from "/images/9.jpg";
import img2 from "/images/2.jpg";
import img3 from "/images/3.jpg";
import img4 from "/images/4.jpg";

const Sec3 = () => {
  const [isHovered, setIsHovered] = useState(null);
  return (
    <div className="w-full flex justify-center lg:h-[120vh]  lg:mb-0    h-[345vh] items-center ">
      <div className=" lg:w-[65vw] w-full lg:h-[100vh] h-fit lg:pb-0 pb-20 flex lg:flex-row  flex-col ">
        <div className="text-area  lg:w-[50%]  flex justify-center pl-8 mt-40 lg:mt-0 lg:pt-0 lg:pb-0 pb-20 flex-col gap-y-15   lg:gap-y-15 ">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className=" lg:text-7xl text-3xl font-semibold">
            Meet <span className="lg:block">Our Team</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className=" lg:w-88 w-83 lg:text-xl text-sm text-[#00000079]">
            We are talented individuals who are passionate about bringing ideas
            to life. With a diverse range of backgrounds and skill sets, we
            collaborate to produce effective solutions for our clients.
            <br />
            <br />
            Together, our creative team is committed to delivering impactful
            work that exceeds expectations.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className=" cursor-pointer flex bg-[#ff9800] rounded-4xl justify-center  items-center gap-8 lg:w-[200px] w-50 h-16  lg:py-8">
            Read More
            <BsFillArrowRightCircleFill className=" lg:text-3xl text-4xl" />
          </motion.button>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-80 lg:text-3xl text-xl font-extralight">
            We <span className="font-bold">Delivering</span> exceptional{" "}
            <span className="font-bold">results.</span>
          </motion.h2>
        </div>

        <div className="image-area lg:w-[50%] w-full mb-20   flex lg:flex-row flex-col   items-center gap-5 ">
          <motion.div className="image-left relative flex flex-col  lg:gap-y-4   gap-8 ">
            <motion.div
              onMouseEnter={() => setIsHovered(1)}
              onMouseLeave={() => setIsHovered(0)}
              whileHover={{ scale: 0.97, z: 0.5 }}
              className="lg:h-90 lg:w-65 cursor-pointer h-100 w-80 bg-cover relative   group bg-center  "
              style={{ backgroundImage: `url(${img11})` }}>
              <div className="w-full text-white gap-y-4   hover:bg-[rgba(000,000,000,0.7)] hover:duration-200   h-full hidden group-hover:flex flex-col justify-end items-center pb-15">
                <motion.div
                  className=" absolute bottom-0 w-full left-0 h-1  bg-[#ff9800]"
                  initial={{ width: 0 }}
                  animate={{ width: isHovered === 1 ? "100%" : 0 }}
                  transition={{ duration: 0.5, ease: "linear" }}></motion.div>
                <p className="cursor-pointer">Anna Oldman</p>
                <p className="cursor-pointer">ART DIRECTOR</p>
                <div className="flex gap-4">
                  <FaTwitter className="cursor-pointer" />
                  <FaDribbble className="cursor-pointer" />
                  <FaGithub className="cursor-pointer" />
                </div>
              </div>
            </motion.div>
            <motion.div
              onMouseEnter={() => setIsHovered(1)}
              onMouseLeave={() => setIsHovered(0)}
              whileHover={{ scale: 0.97, z: 0.5 }}
              className="lg:h-90 lg:w-65 cursor-pointer h-100 w-80 bg-cover relative group bg-center "
              style={{ backgroundImage: `url(${img3})` }}>
              <div className="w-full text-white gap-y-4   hover:bg-[rgba(000,000,000,0.7)] hover:duration-200   h-full hidden group-hover:flex flex-col justify-end items-center pb-15">
                <motion.div
                  className=" absolute bottom-0 w-full left-0 h-1 z-40 bg-[#ff9800]"
                  initial={{ width: 0 }}
                  animate={{ width: isHovered === 1 ? "100%" : 0 }}
                  transition={{ duration: 0.5, ease: "linear" }}></motion.div>
                <p className="cursor-pointer">Anna Oldman</p>
                <p className="cursor-pointer">ART DIRECTOR</p>
                <div className="flex gap-4">
                  <FaTwitter className="cursor-pointer" />
                  <FaDribbble className="cursor-pointer" />
                  <FaGithub className="cursor-pointer" />
                </div>
              </div>
            </motion.div>
          </motion.div>
          <div className="image-right flex flex-col lg:gap-y-4   gap-8 lg:pt-8 pt-3 ">
            <p className="hidden lg:flex">
              <span className="text-red-500 text-xl">*</span> Founder of Our
              Agency
            </p>
            <motion.div
              onMouseEnter={() => setIsHovered(1)}
              onMouseLeave={() => setIsHovered(0)}
              whileHover={{ scale: 0.97, z: 0.1 }}
              className="lg:h-90 lg:w-65 cursor-pointer h-100  w-80 bg-cover  relative group bg-center bg-red-900 "
              style={{ backgroundImage: `url(${img2})` }}>
              <div className="w-full text-white gap-y-4   hover:bg-[rgba(000,000,000,0.7)] hover:duration-200   h-full hidden group-hover:flex flex-col justify-end items-center pb-15">
                <motion.div
                  className=" absolute bottom-0 w-full left-0 h-1 z-40 bg-[#ff9800]"
                  initial={{ width: 0 }}
                  animate={{ width: isHovered === 1 ? "100%" : 0 }}
                  transition={{ duration: 0.5, ease: "linear" }}></motion.div>
                <p className="cursor-pointer">Anna Oldman</p>
                <p className="cursor-pointer">ART DIRECTOR</p>
                <div className="flex gap-4">
                  <FaTwitter className="cursor-pointer" />
                  <FaDribbble className="cursor-pointer" />
                  <FaGithub className="cursor-pointer" />
                </div>
              </div>
            </motion.div>
            <motion.div
              onMouseEnter={() => setIsHovered(1)}
              onMouseLeave={() => setIsHovered(0)}
              whileHover={{ scale: 0.97, z: 0.5 }}
              className="lg:h-90 lg:w-65 cursor-pointer h-100 w-80 bg-cover   relative group bg-red-900 "
              style={{ backgroundImage: `url(${img4})` }}>
              <div className="w-full text-white gap-y-4   hover:bg-[rgba(000,000,000,0.7)] hover:duration-200   h-full hidden group-hover:flex flex-col justify-end items-center pb-15">
                <motion.div
                  className=" absolute bottom-0 w-full left-0 h-1 z-40 bg-[#ff9800]"
                  initial={{ width: 0 }}
                  animate={{ width: isHovered === 1 ? "100%" : 0 }}
                  transition={{ duration: 0.5, ease: "linear" }}></motion.div>
                <p className="cursor-pointer">Anna Oldman</p>
                <p className="cursor-pointer">ART DIRECTOR</p>
                <div className="flex gap-4">
                  <FaTwitter className="cursor-pointer" />
                  <FaDribbble className="cursor-pointer" />
                  <FaGithub className="cursor-pointer" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sec3;
