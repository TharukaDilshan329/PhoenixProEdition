import React, { useEffect, useState } from "react";
import "./StatsCounter.css";

const stats = [
    { label: "Trips Completed", value: 500, suffix: "+", icon: "🚌" },
    { label: "Years Experience", value: 3, suffix: "+", icon: "⏳" },
    { label: "Happy Customers", value: 390, suffix: "+", icon: "😊" },
    // { label: "Cities Covered", value: 25, suffix: "+", icon: "🌍" },
];

const Counter = ({ value, suffix }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 2000; // 2s
        const stepTime = Math.abs(Math.floor(duration / value));

        const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start === value) {
                clearInterval(timer);
            }
        }, stepTime);

        return () => clearInterval(timer);
    }, [value]);

    return (
        <span>
      {count}
            {suffix}
    </span>
    );
};

const StatsCounter = () => {
    return (
        <section className="stats-section">
            <div className="stats-container">
                {stats.map((s, index) => (
                    <div className="stat-card" key={index}>
                        <div className="stat-icon">{s.icon}</div>
                        <h2 className="stat-number">
                            <Counter value={s.value} suffix={s.suffix} />
                        </h2>
                        <p className="stat-label">{s.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StatsCounter;
