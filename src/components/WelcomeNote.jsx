import React from "react";
import "./WelcomeNote.css";
import busImage from "../assets/about-us1.jpg";


const WelcomeNote = () => {
    return (
        <section className="welcome-section">
            <div className="welcome-container">
                <div className="welcome-content">
                    <h2 className="welcome-title">Welcome to Rainbow Rides</h2>
                    <p className="welcome-text">
                        Experience safe, stylish, and reliable travel with our customized buses.
                        Perfect for family trips, corporate journeys, or leisure travel — we ensure comfort, convenience, and a memorable ride every time.
                    </p>
                    <button className="welcome-btn">Explore Our Services</button>
                </div>
                <div className="welcome-image">
                    <img
                        src={busImage}
                        alt="Bus"
                    />
                </div>
            </div>
        </section>
    );
};

export default WelcomeNote;
