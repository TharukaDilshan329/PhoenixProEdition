import React from 'react';
import Slider from "./components/Slider";
import WelcomeNote from "./components/WelcomeNote";
import StatsCounter from "./components/StatsCounter";
import VisionMission from "./components/VisionMission";
import slider1 from "./assets/slider1.jpg";
import slider2 from "./assets/slider2.jpg";
import slider3 from "./assets/slider3.jpg";

const images = [slider1, slider2, slider3];

const captions = [];

const Home = () => {
    return (
        <div>
            <Slider images={images} captions={captions} autoSlide={true} slideInterval={5000} />
            <WelcomeNote/>
            <StatsCounter/>
            <VisionMission />
        </div>
    );
};

export default Home;
