import React from "react";
import "./Intro.css";
import busImage from "../assets/about-us1.jpg";

export default function Intro() {
    return (
        <div className="intro-container">
            <div className="intro-content">
                <div className="intro-left slide-left">
                    <h1 className="intro-title">About Us</h1>
                    <p className="intro-description">
                       Under Mr. Grero’s visionary leadership, NCG Express is committed to delivering top-notch Public Bus Services, setting new standards for reliability and innovation in the transportation sector. From its humble beginnings, the company has transformed into a symbol of excellence, consistently prioritizing customer satisfaction and providing a diverse range of high-quality mobility solutions to the people of Sri Lanka.
                    </p>
                </div>
                <div className="intro-right slide-right">
                    <img src={busImage} alt="Our Bus" className="intro-image" />
                </div>
            </div>
        </div>
    );
}
