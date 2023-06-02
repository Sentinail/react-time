import React, { useState } from "react"
import "../Assets/Styles/FooterStyle.css"
const backgroundImg0 = require("../Assets/Images/titanium-texture.jpg");
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

const ToggleButton = ({ content, setFormatTime, timeFormats, formatData, setDisplayType, displayType }) => {
    let [isToggled, setIsToggled] = useState(true);

    let format = timeFormats;
    let defaultTime = ["hh:mm", "A", "ss", "dddd, MMMM DD"];
    let displayData = displayType;

    if (!isToggled) {
        format[formatData[1]] = formatData[0];
        setFormatTime(format);
        
        displayData[formatData[1]] = formatData[2];
        setDisplayType(displayData);
    } else {
        format[formatData[1]] = defaultTime[formatData[1]]
    }

    const switchChanges = () => {
        setIsToggled(!isToggled);
        displayData[formatData[1]] = "block"
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

const ChangeOption = ({ timeFormat, setTimeFormat, setDisplay, displayData }) => {

    return (
        <div className="change-options">
            <h3>Change Options</h3>
            <div className="toggle-buttons">
                <ToggleButton displayType={displayData} setDisplayType={setDisplay} formatData={["HH:mm", 0, "block"]} content={"12-Hour"} setFormatTime={setTimeFormat} timeFormats={timeFormat}></ToggleButton>
                <ToggleButton displayType={displayData} setDisplayType={setDisplay} formatData={["A", 1, "none"]} content={"AM/PM"} setFormatTime={setTimeFormat} timeFormats={timeFormat}></ToggleButton>
                <ToggleButton displayType={displayData} setDisplayType={setDisplay} formatData={["ss", 2, "none"]} content={"Seconds"} setFormatTime={setTimeFormat} timeFormats={timeFormat}></ToggleButton>
                <ToggleButton displayType={displayData} setDisplayType={setDisplay} formatData={["dddd, MMMM DD", 3, "none"]} content={"Date"} setFormatTime={setTimeFormat} timeFormats={timeFormat}></ToggleButton>
            </div>
        </div>
    )
}

const Footer = ({ changeBackground, setFormatTime, timeFormats, setDisplayType, displayType }) => {

    return (
        <>
        <div className="footer">
            <div className="settings">
                <ChangeBackground setBackground={changeBackground}></ChangeBackground>
                <ChangeOption setTimeFormat={setFormatTime} timeFormat={timeFormats} setDisplay={setDisplayType} displayData={displayType}></ChangeOption>
            </div>
        </div>
        </>
    )
}

export default Footer;