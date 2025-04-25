// /** @format */

// import React from "react";
// import { CiMenuFries } from "react-icons/ci";
// import { motion } from "framer-motion";
// import { useState } from "react";

// export const Nav = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       <motion.div
//         className="w-full h-screen  fixed bg-[rgba(0,0,0,0.9)] backdrop-blur-xl top-0 left-0 z-20"
//         initial={{ y: -1000 }}
//         animate={{ y: isOpen ? 0 : -1000 }}
//         transition={{ type: "spring", stiffness: 300, damping: 40 }}>
//         <ul className=" flex  flex-col text-white justify-center fixed lg:left-50 left-20 z-40 h-[100%] gap-8 text-4xl font-semibold">
//           <li className="hover:text-[#ff9800] cursor-pointer">Home page</li>
//           <li className="hover:text-[#ff9800] cursor-pointer w-60">
//             Portfolio
//           </li>
//           <li className="hover:text-[#ff9800] cursor-pointer w-60">Services</li>
//           <li className="hover:text-[#ff9800] cursor-pointer w-60">
//             Newsletter
//           </li>
//           <li className="hover:text-[#ff9800] cursor-pointer w-60">
//             Other Pages
//           </li>
//         </ul>
//       </motion.div>

//       <div className="text-4xl  w-full flex justify-between  px-6 bg-[rgba(0,0,0,0.9)] backdrop-blur-xl top-0 left-0  h-20 items-center text-white fixed z-30">
//         <h1>A.</h1>
//         <button onClick={() => setIsOpen(!isOpen)}>
//           <CiMenuFries className="text-white cursor-pointer" />
//         </button>
//       </div>
//     </>
//   );
// };






