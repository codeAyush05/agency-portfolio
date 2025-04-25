/** @format */

import React, { useEffect } from "react";
import { Home } from "./Pages/Home/Home";
import Lenis from "@studio-freight/lenis";
const App = () => {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      // console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <div>
      <Home />
    </div>
  );
};

export default App;
