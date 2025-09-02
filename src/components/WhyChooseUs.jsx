import React from "react";
import "./WhyChooseUs.css";
import { FaShieldAlt, FaBus, FaUsers, FaClock } from "react-icons/fa";

const reasons = [
    {
        icon: <FaShieldAlt />,
        title: "Safe & Secure",
        description: "We prioritize safety and ensure every trip is secure for all passengers.",
    },
    {
        icon: <FaBus />,
        title: "Modern Fleet",
        description: "Our buses are comfortable, clean, and well-maintained for a smooth journey.",
    },
    {
        icon: <FaUsers />,
        title: "Experienced Staff",
        description: "Our trained drivers and friendly staff make your experience enjoyable.",
    },
    {
        icon: <FaClock />,
        title: "On-Time Service",
        description: "We value your time, ensuring punctual pick-ups and drop-offs.",
    },
];

export default function WhyChooseUs() {
    return (
        <div className="why-container">
            <h2 className="why-heading slide-down">Why Choose Us</h2>
            <div className="why-cards">
                {reasons.map((item, index) => (
                    <div key={index} className="why-card slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                        <div className="why-icon">{item.icon}</div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
