import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import logoImg from './assets/logo.png';
import Footer from './components/Footer';
import Services from './Services';
import Gallery from './Gallery';
import About from './About';
import Contact from './Contact';
import Home from "./Home";

const menuItems = [
    { text: 'Home', to: '/' },
    { text: 'Services', to: '/services', isPage: true },
    { text: 'Gallery', to: '/gallery', isPage: true },
    { text: 'About Us', to: '/about', isPage: true },
    { text: 'Contact Us', to: '/contact', isPage: true },
];

//const cta = { text: 'Book Now', href: '/book' };

const navLinks = [
    { title: 'Home', to: '/' },
    { title: 'About', to: '/about' },
    { title: 'Services', to: '/services' },
    { title: 'Contact', to: '/contact' }
];

const socialLinks = {
    facebook: "https://web.facebook.com/pehsara",
    instagram: "https://instagram.com/Phoenix_pro_edition",
    tiktok: "https://tiktok.com/@Phoenix_pro_edition_official",
    youtube: "https://youtube.com/@Phoenixproedition",
    whatsapp: "https://wa.me/94123456789"
};

const contact = {
    address: "No 53,Middeniya road, Walasmulla, Sri Lanka",
    email: "Phoenixproedition37@gmail.com",
    phone: "0742793737 / 0773916967 | 0764316143 | 0714216143"
};

function App() {

    return (
        <Router /*basename="/PhoenixProEdition"*/> {/* <-- Wrap the whole app in Router */}
            <div>
                <Header
                    logo={<img src={logoImg} alt="My Logo" />}
                    menuItems={menuItems}
                />
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer
                    logo={logoImg}
                    navLinks={navLinks}
                    contact={contact}
                    socialLinks={socialLinks}
                    copyrightText="© 2025 Phoenix Pro Edition. All rights reserved."
                />
            </div>
        </Router>
    );
}

export default App;