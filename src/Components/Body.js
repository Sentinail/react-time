import React from "react";
import { useState, useEffect } from "react";
import "../Assets/Styles/TimeContainerStyle.css";
import moment from "moment";

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

const Time = ({ timeFormat, displayData }) => {

    let [isZoom, setIsZoom] = useState(false);
    let [hoursMinutes, setHoursMinutes] = useState(moment().format(timeFormat[0]));
    let [amPm, setAmPm] = useState(moment().format(timeFormat[1]));
    let [seconds, setSeconds] = useState(moment().format(timeFormat[2]));
    let [currentDate, setCurrentDate] = useState(moment().format(timeFormat[3]));

    useEffect(() => {
        const interval = setInterval(() => {
          const currentHoursMinutes = moment().format(timeFormat[0]);
          const currentAmPm = moment().format(timeFormat[1]);
          const currentSeconds = moment().format(timeFormat[2]);
          const currentCurrentDate = moment().format(timeFormat[3]);
    
          setHoursMinutes(currentHoursMinutes);
          setSeconds(currentSeconds);
          setAmPm(currentAmPm);
          setCurrentDate(currentCurrentDate);
        }, 1000);
    
        return () => clearInterval(interval);
      }, [timeFormat]);    

      const font = isZoom ? window.innerWidth * 0.25 : 150;

    return (

    <>
        <div className="time" onClick={() => setIsZoom(!isZoom)}>

            <div className="time-stamp">
                <p className="hours-minutes" style={{fontSize: font + "px", display: displayData[0]}}>{hoursMinutes}</p>
                <div className="seconds-meridiem">
                    <p className="meridian" style={{fontSize: (font/2.5) + "px", display: displayData[1]}}>{amPm}</p>
                    <p className="seconds" style={{fontSize: (font/2.5) + "px", display: displayData[2]}}>{seconds}</p>
                </div>
            </div>
            <div className="date-container">
                <p className="current-date" style={{fontSize: (font/3) + "px", display: displayData[3]}}>{currentDate}</p>
            </div>
        </div>
    </>

    )
}

const TimeContainer = ({ timeData, displayType }) => {
    

    return (
        <div className="time-container">
            
            <Time timeFormat={timeData} displayData={displayType}></Time>
            <Side></Side>
            
        </div>
    )
}

export default TimeContainer;