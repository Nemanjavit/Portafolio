import { useState } from "react";

import "./scss/index.scss";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Quote from "./components/Sections/Quote";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Quote />
    </>
  );
}

export default App;
