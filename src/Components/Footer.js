import React, { useState } from "react"
import "../Assets/Styles/FooterStyle.css"
import moment from "moment";
const backgroundImg0 = require("../Assets/Images/Dark_Grid_BG.png");
const backgroundImg1 = require("../Assets/Images/blue-hair-anime-girl-Hatsune-Miku-wallpaper.jpg");
const backgroundImg2 = require("../Assets/Images/698444.png");
const backgroundImg3 = require("../Assets/Images/Miku_Dark.jpg");
const backgroundImg4 = require("../Assets/Images/Hatsune.Miku.full.3175242.png");
const backgroundImg5 = require("../Assets/Images/background.jpg");

const ChangeBackground = ({ setBackground }) => {
    const handleSelectChange = (event) => {
        console.log(event);
        const selectedBackground = event.target.value;
        setBackground(selectedBackground);
    };
  
    return (
      <div className="change-background">
        <h3>Change Background</h3>
        <select onChange={(ev) => handleSelectChange(ev)}>
            <option value={backgroundImg0}>Default</option>
            <option value={backgroundImg1}>Background 1</option>
            <option value={backgroundImg2}>Background 2</option>
            <option value={backgroundImg3}>Background 3</option>
            <option value={backgroundImg4}>Background 4</option>
            <option value={backgroundImg5}>Background 5</option>
        </select>
      </div>
    );
};

const ToggleButton = ({ content, setMomentTime, timeMoment }) => {
    let [isToggled, setIsToggled] = useState(true);

    const switchChanges = () => {
        if (isToggled) {
            setMomentTime("Bruh");
        } else {
          console.log("ON!!!");
        }
    
        setIsToggled(!isToggled);
      };

    return (
        <>
            <div className="switch-container" style={isToggled ? {flexDirection: "row-reverse"} : null}>
                <div className="switch" onClick={(event) => switchChanges(event)}></div>
            </div>
            <p>{content}</p>
        </>

    )
}

const ChangeOption = ({ setTimeMoment, timeMoment }) => {
    return (
        <div className="change-options">
            <h3>Change Options</h3>
            <div className="toggle-buttons">
                <ToggleButton content={"12-Hour"} setMomentTime={setTimeMoment} timeMoment={timeMoment}></ToggleButton>
                <ToggleButton content={"AM/PM"} setMomentTime={setTimeMoment} timeMoment={timeMoment}></ToggleButton>
                <ToggleButton content={"Seconds"} setMomentTime={setTimeMoment} timeMoment={timeMoment}></ToggleButton>
                <ToggleButton content={"Date"} setMomentTime={setTimeMoment} timeMoment={timeMoment}></ToggleButton>
                <ToggleButton content={"Week"} setMomentTime={setTimeMoment} timeMoment={timeMoment}></ToggleButton>
            </div>
        </div>
    )
}

const Footer = ({ changeBackground, setMomentTime, timeMoment }) => {
    return (
        <>
        <div className="footer">
            <div className="settings">
                <ChangeBackground setBackground={changeBackground}></ChangeBackground>
                <ChangeOption setTimeMoment={setMomentTime} timeMoment={timeMoment}></ChangeOption>
            </div>
        </div>
        </>
    )
}

export default Footer;