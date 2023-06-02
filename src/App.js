import React from "react";
import Header from "./Components/Header";
import TimeContainer from "./Components/Body";
import Footer from "./Components/Footer";
import "./Assets/Styles/AppStyle.css";
import { useState } from "react";
const backgroundImg0 = require("./Assets/Images/titanium-texture.jpg");

function App() {
  let [background, setBackground] = useState(backgroundImg0)
  let [timeFormat, setTimeFormat] = useState(["hh:mm", "A", "ss", "dddd, MMMM DD"]);
  let [display, setDisplay] = useState(["block", "block", "block", "block"]);

  return (
    <div className="container" style={{backgroundImage: `url("${background}")`}}>
      <Header></Header>
      <TimeContainer timeData={timeFormat} displayType={display}></TimeContainer>
      <Footer changeBackground={setBackground} setFormatTime={setTimeFormat} timeFormats={timeFormat} setDisplayType={setDisplay} displayType={display}></Footer>
    </div>
  );
}

export default App;
