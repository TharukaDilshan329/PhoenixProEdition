// src/components/VisionMission.js
import React from "react";
import "./VisionMission.css";

const VisionMission = () => {
    return (
        <section className="vision-mission">
            <div className="vm-container">
                <div className="vm-box vision">
                    <h2>Our Vision</h2>
                    <p>
                        "To be the most trusted and preferred private transport service, redefining safe, comfortable, and reliable travel for every journey."
                    </p>
                </div>
                <div className="vm-box mission">
                    <h2>Our Mission</h2>
                    <p>
                        "Our mission is to deliver convenient, affordable, and customer-focused transport solutions by ensuring punctuality, safety, and comfort, while embracing innovation and sustainability in every ride we offer."
                    </p>
                </div>
            </div>
        </section>
    );
};

export default VisionMission;
