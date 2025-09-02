import React from "react";
import "./Team.css";
// import FloatingBalls from './FloatingBalls';

export default function Tea({ members = [] }) {
    return (
        <div className="team-container">
            {/*<FloatingBalls count={30} />*/}
            <h2 className="team-heading slide-down">Our Team</h2>
            <div className="team-cards">
                {members.map((member, index) => (
                    <div key={index} className={`team-card slide-up`} style={{ animationDelay: `${index * 0.2}s` }}>
                        <div className="team-photo">
                            <img src={member.photo} alt={member.name} />
                        </div>
                        <div className="team-info">
                            <h3>{member.name}</h3>
                            <p>{member.position}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
