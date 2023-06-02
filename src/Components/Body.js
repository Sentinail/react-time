import React from "react";
import { useState } from "react";
import "../Assets/Styles/TimeContainerStyle.css";

const Side = () => {
    return (
        <>
            <div className="side">
                <button >Donate ♡</button>
                <button>Center</button>
                <button>Fullscreen</button>
                <button>Zoom In</button>
                <button>Settings</button>
            </div>
        </>
    )
}

const Time = ({ momentTime }) => {

    let [isZoom, setIsZoom] = useState(false);
    
    let hoursMinutes = momentTime.hoursMinutes;
    // let [hoursMinutes, sethoursMinutes] = useState(moment().format("hh:mm"));
    let seconds = momentTime.seconds;
    // let [seconds, setSeconds] = useState(moment().format("ss"));
    let amPm = momentTime.amPm;
    // let [amPm, setamPm] = useState(moment().format("A"));
    let currentDate = momentTime.currentDate;
    // let [currentDate, setCurrentDate] = useState(moment().format("dddd, MMMM DD"));

    let font;
    if (isZoom) {
      font = window.innerWidth * 0.25;
    } else {
      font = 150;
    }

    return (

    <>
        <div className="time" onClick={() => setIsZoom(!isZoom)}>

            <div className="time-stamp">
                <p className="hours-minutes" style={{fontSize: font + "px"}}>{hoursMinutes}</p>
                <div className="seconds-meridiem">
                    <p className="meridian" style={{fontSize: (font/2.5) + "px"}}>{amPm}</p>
                    <p className="seconds" style={{fontSize: (font/2.5) + "px"}}>{seconds}</p>
                </div>
            </div>
            <div className="date-container">
                <p className="current-date" style={{fontSize: (font/3) + "px"}}>{currentDate}</p>
            </div>
        </div>
    </>

    )
}

const TimeContainer = ({ time, setTime }) => {
    

    return (
        <div className="time-container">
            
            <Time momentTime={time}></Time>
            <Side></Side>
            
        </div>
    )
}

export default TimeContainer;