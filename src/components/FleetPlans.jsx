import React from "react";
import "./FleetPlans.css";
import bus1 from "../assets/bus1.jpg";
import bus2 from "../assets/bus2.jpg";
import bus3 from "../assets/bus3.jpg";

const fleet = [
    {
        name: "Phoenix Pro Edition 1",
        image: bus1,
        description: "Perfect for weddings, VIP trips, and luxury parties.",
        facilities: ["AC", "Headrest Seats", "Sound System", "VIP Room", "Disco Lights", "Water Tank"],
    },
    {
        name: "Phoenix Pro Edition 2",
        image: bus2,
        description: "Ideal for family and office trips with maximum comfort.",
        facilities: ["AC", "Reclining Seats", "Mini Fridge", "Wi-Fi", "USB Charging", "Sound System"],
    },
    {
        name: "Dam Rajini",
        image: bus3,
        description: "Designed for night events, parties, and fun journeys.",
        facilities: ["Disco Lights", "Surround Sound", "Dance Floor Space", "Water Tank", "Headrest Seats"],
    },
];

const FleetPlans = () => {
    return (
        <section className="fleet-section">
            <h2 className="fleet-title">Our Fleet Packages</h2>
            <div className="fleet-container">
                {fleet.map((bus, index) => (
                    <div className="fleet-card" key={index}>
                        <img src={bus.image} alt={bus.name} className="fleet-image" />
                        <h3 className="fleet-name">{bus.name}</h3>
                        <p className="fleet-description">{bus.description}</p>
                        <ul className="fleet-facilities">
                            {bus.facilities.map((facility, idx) => (
                                <li key={idx}>✅ {facility}</li>
                            ))}
                        </ul>
                        {/*<button className="fleet-button">Book Now</button>*/}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FleetPlans;
