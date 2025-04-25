/** @format */

import React from "react";
import a from "/images/1.jpg";
import b from "/images/2 (3).jpg";
import { motion } from "framer-motion";

const Sec1 = () => {
  return (
    <div className=" w-ful h-130vh lg:flex lg:flex-row flex-col lg:pt-10 ">
      <div className="text-section  flex flex-col justify-center pt-30 px-6 lg:px-0  lg:w-[50%] w-full h-fit lg:pl-60 gap-15  ">
        <motion.h1
          className=" lg:text-6xl text-4xl lg:w-full w-55 font-semibold text-gray-900"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          Discover{" "}
          <span className="block">
            our <span className="font-extralight">studio</span>{" "}
          </span>
        </motion.h1>

        <motion.p
          className="text-gray-900 lg:w-[450px] w- "
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          At our design studio, we are a collective of talented individuals
          ignited by our unwavering passion for transforming ideas into reality.
          With a harmonious blend of diverse backgrounds and a vast array of
          skill sets, we join forces to create compelling solutions for our
          esteemed clients. <br />
          <br />
          <br />
          Collaboration is at the heart of what we do. Our team thrives on the
          synergy that arises when unique perspectives converge, fostering an
          environment of boundless creativity. By harnessing our collective
          expertise, we produce extraordinary results that consistently surpass
          expectations
        </motion.p>

        <div className="flex gap-5 items-center w-full">
          <img
            src={b}
            alt=""
            className="w-20 h-20 object-top   rounded-full  "
          />
          <motion.p
            className="font-semibold text-sm w-63"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            {" "}
            Passionatly Creating{" "}
            <span className="font-extralight">
              Design Wonders:{" "}
            </span>Unleashing{" "}
            <span className="font-extralight">Boundless Creavity</span>
          </motion.p>
        </div>
      </div>

      <div className="image-section lg:w-[50%]  h-full flex justify-center pb-20 lg:pt-0 pt-10   items-center">
        <motion.img
          src={a}
          alt=""
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 2,
            ease: [0.16, 1, 0.3, 1], // Custom bezier curve
          }}
          viewport={{
            margin: "-50px 0px 0px -50px",
          }}
          className=" lg:h-180 h-130"
        />
      </div>
    </div>
  );
};

export default Sec1;
