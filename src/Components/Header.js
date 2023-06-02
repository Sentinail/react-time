import React from "react";
import "../Assets/Styles/HeaderStyle.css"
const icon = require("../Assets/Images/clock.png");

const ClockTab = () => {
    return (
        <div className="clock-tab">
            <img src={icon} alt="icon"></img>
            <h1>Clock Tab</h1>
        </div>
    )
}

const NavLinks = () => {
    return (
        <div className="nav">
            <a className="nav-links" href="youtube.com">Countdown</a>
            <a className="nav-links" href="youtube.com">Timer Tab</a>
            <a className="nav-links" href="youtube.com">Msg Tab</a>
        </div>
    )
}

const Header = () => {
    return (
        <div className="header">
            <ClockTab></ClockTab>
            <NavLinks></NavLinks>
        </div>
    )
}

export default Header;