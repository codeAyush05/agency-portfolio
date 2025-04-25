/** @format */

import React from "react";
import { Hero } from "./Hero";
import { Nav } from "./Nav";
import Sec1 from "./Sec1";
import Sec2 from "./Sec2";
import Sec3 from "./Sec3";
import Sec4 from "./Sec4";
import Sec5 from "./Sec5";
import Footer from "./Footer";

export const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Sec1 />
      <Sec2 />
      <Sec3 />
      <Sec4 />
      <Sec5 />
      <Footer />
    </div>
  );
};
