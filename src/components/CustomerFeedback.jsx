import React from "react";
import "./CustomerFeedback.css";
import customerImage1 from "../assets/customer1.jpg";
import customerImage2 from "../assets/customer2.jpg";
import customerImage3 from "../assets/customer3.jpg";


const testimonials = [
    {
        name: "Kasun Perera",
        role: "Business Owner",
        feedback:
            "Amazing service! Always on time and very professional. Highly recommend NCG Express for reliable transport.",
        rating: 5,
        image: customerImage1,
    },
    {
        name: "Dilani Fernando",
        role: "Frequent Traveler",
        feedback:
            "The buses are super comfortable and the booking process is smooth. I feel safe traveling with them.",
        rating: 4,
        image: customerImage2,
    },
    {
        name: "Sahan Madushanka",
        role: "Student",
        feedback:
            "Affordable and punctual. Customer support is also really helpful when I had questions.",
        rating: 4,
        image: customerImage3,
    },
];

const CustomerFeedback = () => {
    return (
        <section className="feedback-section">
            <h2 className="feedback-heading">💬 What Our Customers Say</h2>
            <div className="feedback-list">
                {testimonials.map((t, index) => (
                    <div className="feedback-card" key={index}>
                        <img src={t.image} alt={t.name} className="feedback-avatar" />
                        <h3 className="feedback-name">{t.name}</h3>
                        <p className="feedback-role">{t.role}</p>
                        <p className="feedback-text">“{t.feedback}”</p>
                        <div className="feedback-stars">
                            {Array.from({ length: 5 }, (_, i) => (
                                <span key={i} className={i < t.rating ? "star filled" : "star"}>
                  ★
                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CustomerFeedback;
