import React from "react";
import "./FloatingBalls.css";

export default function FloatingBalls({ count = 10 }) {
    return (
        <div className="floating-balls-container">
            {Array.from({ length: count }).map((_, i) => {
                const size = Math.random() * 12 + 5; // 5px to 17px
                const left = Math.random() * 100; // random horizontal position
                const duration = Math.random() * 25 + 5; // 5s to 20s
                const delay = Math.random() * 10; // random start delay
                return (
                    <span
                        key={i}
                        className="floating-ball"
                        style={{
                            width: `${size}px`,
                            height: `${size}px`,
                            left: `${left}%`,
                            animationDuration: `${duration}s`,
                            animationDelay: `${delay}s`,
                        }}
                    ></span>
                );
            })}
        </div>
    );
}
