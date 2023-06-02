import React from "react";
import Header from "./Components/Header";
import TimeContainer from "./Components/Body";
import Footer from "./Components/Footer";
import "./Assets/Styles/AppStyle.css";
import { useState, useEffect } from "react";
import moment from "moment"
const backgroundImg0 = require("./Assets/Images/Dark_Grid_BG.png");

function App() {
  let [background, setBackground] = useState(backgroundImg0)
  let [timeMoment, setTimeMoment] = useState({hoursMinutes: moment().format("hh:mm"), 
                                              seconds: moment().format("ss"),
                                              amPm: moment().format("A"),
                                              currentDate: moment().format("dddd, MMMM DD")
                                              });
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeMoment({
        hoursMinutes: moment().format("hh:mm"),
        seconds: moment().format("ss"),
        amPm: moment().format("A"),
        currentDate: moment().format("dddd, MMMM DD")
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container" style={{backgroundImage: `url("${background}")`}}>
      <Header></Header>
      <TimeContainer time={timeMoment}></TimeContainer>
      <Footer changeBackground={setBackground} setMomentTime={setTimeMoment} timeMoment={timeMoment}></Footer>
    </div>
  );
}

export default App;
