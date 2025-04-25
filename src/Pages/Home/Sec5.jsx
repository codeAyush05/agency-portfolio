/** @format */

import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import img1 from "/images/1 (2).jpg";
import img2 from "/images/2 (1).jpg";

const Sec5 = () => {
  return (
    <div className="sec-5 w-full mt-50 flex items-center  justify-center">
      <div className="parent lg:w-350 w-full lg:h-[120vh] justify-center items-center h-fit px-9 flex flex-col">
        <div className="flex lg:justify-between flex-col lg:flex-row w-full  lg:px-15 header pb-20">
          <h1 className="lg:text-4xl text-3xl font-semibold">Popular Publications:</h1>
          <p className="flex text-xl pt-8 lg:pt-0 gap-4">
            VIEW ALL
            <BsFillArrowRightCircleFill className=" lg:text-3xl text-4xl" />
          </p>
        </div>

        <div className="w-full  flex justify-center gap-8 flex-col lg:flex-row    h-fit">
          <div className="flex flex-col gap-8 lg:w-[45%]  w-full overflow-hidden h-fit ">
            <img
              src={img1}
              alt=""
              className=" w-163  object-cover object-center hover:scale-105 duration-300  transition ease-in-out "
            />

            <p className="text-sm pt-5 ">
              <span className="text-[#ff9800] pr-1 font-semibold">
                TECHNOLOGY{" "}
              </span>{" "}
              may 24 2023
            </p>

            <h1 className="text-2xl font-semibold lg:w-120 w-90">
              How To Become A Graphic Designer In 10 Simple Steps
            </h1>

            <p className="w-140 text-[#00000080] ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
              sequi commodi dignissimos optio, beatae, eos necessitatibus nisi.
              Nam cupiditate consectetur nostrum qui! Repellat natus nulla, nisi
              aliquid, asperiores impedit tempora sequi est reprehenderit cumque
              explicabo, dicta. Rem nihil ullam totam ea voluptas quibusdam
              repudiandae id ut at iure! Totam, a!
            </p>

            <button className="flex gap-5 font-extralight  h-20">
              {" "}
              READ MORE{" "}
              <BsFillArrowRightCircleFill className=" lg:text-3xl text-4xl" />
            </button>
          </div>
          <div className="flex flex-col gap-8   lg:w-[45%] w-full overflow-hidden  h-fit ">
            <img
              src={img2}
              alt=""
              className="w-163 object-cover hover:scale-105 duration-300 object-center"
            />

            <p className="text-sm pt-5 ">
              <span className="text-[#ff9800] pr-1 font-semibold">
                TECHNOLOGY{" "}
              </span>{" "}
              may 24 2023
            </p>

            <h1 className="text-2xl font-semibold lg:w-120 w-80 ">
              <h1>16 Best Graphic Design Online and Offline Courses</h1>
            </h1>

            <p className="w-140 text-[#00000080] ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
              sequi commodi dignissimos optio, beatae, eos necessitatibus nisi.
              Nam cupiditate consectetur nostrum qui! Repellat natus nulla, nisi
              aliquid, asperiores impedit tempora sequi est reprehenderit cumque
              explicabo, dicta. Rem nihil ullam totam ea voluptas quibusdam
              repudiandae id ut at iure! Totam, a!
            </p>

            <button className="flex gap-5 font-extralight   h-20">
              {" "}
              READ MORE{" "}
              <BsFillArrowRightCircleFill className=" lg:text-3xl  text-4xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sec5;
