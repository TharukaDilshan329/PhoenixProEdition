import React from 'react';
import Intro from './components/Intro';
import Team from './components/Team';
import ownerPhoto1 from './assets/owner1.jpg';
import ownerPhoto2 from './assets/owner2.jpg';
import employeePhoto1 from './assets/employee1.jpg';
import WhyChooseUs from "./components/WhyChooseUs";
import CustomerFeedback from "./components/CustomerFeedback";
import StatsCounter from "./components/StatsCounter";

const teamMembers = [
    { name: "Manoj", position: "Owner", photo: ownerPhoto1 },
    { name: "Suranga", position: "Manager", photo: ownerPhoto2 },
    { name: "xxx", position: "Driver", photo: employeePhoto1 },
];
const About = () => {
    return (
        <div style={{ width: "100%" }}>
            <Intro/>
            <StatsCounter/>
            <WhyChooseUs />
            <Team members={teamMembers}/>
            <CustomerFeedback/>
        </div>
    );
};

export default About;
