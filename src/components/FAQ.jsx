import React, { useState } from "react";
import "./FAQ.css";

const faqData = [
    {
        question: "What services do you provide?",
        answer: "We provide safe, stylish, and reliable private bus services across multiple locations.",
    },
    {
        question: "How can I book a bus?",
        answer: "You can book through our website or by calling our customer support hotline.",
    },
    {
        question: "Are your buses safe?",
        answer: "Yes! All our buses are regularly inspected and follow strict safety protocols.",
    },
    {
        question: "Do you offer group discounts?",
        answer: "Yes, we offer special rates for groups. Please contact us for more details.",
    },
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-container">
            <h2 className="faq-heading">FAQ</h2>
            <div className="faq-list">
                {faqData.map((item, index) => (
                    <div
                        key={index}
                        className={`faq-item ${activeIndex === index ? "active" : ""}`}
                        onClick={() => toggleFAQ(index)}
                    >
                        <div className="faq-question">{item.question}</div>
                        <div className="faq-answer">{item.answer}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
