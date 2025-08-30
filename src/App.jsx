import { useState } from "react";

import "./scss/index.scss";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container"></div>
    </>
  );
}

export default App;
