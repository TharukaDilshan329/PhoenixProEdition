import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube, FaWhatsapp } from 'react-icons/fa';

export default function Footer({
                                   logo,
                                   navLinks = [],
                                   contact = {},
                                   socialLinks = {}, // Add this prop
                                   copyrightText
                               }) {
    return (
        <footer className="footer">
            {/* Logo Section */}
            <div className="footer-top">
                {logo && <img src={logo} alt="Logo" className="footer-logo" />}

                {/* Navigation Links */}
                {navLinks.length > 0 && (
                    <ul className="footer-links">
                        {navLinks.map((link, idx) => (
                            <li key={idx}>
                                <a href={link.url}>{link.title}</a>
                            </li>
                        ))}
                    </ul>
                )}

                {/* Social Media Icons */}
                <div className="footer-social">
                    {socialLinks.facebook && <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>}
                    {socialLinks.instagram && <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>}
                    {socialLinks.tiktok && <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer"><FaTiktok /></a>}
                    {socialLinks.youtube && <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer"><FaYoutube /></a>}
                    {socialLinks.whatsapp && <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>}
                </div>
            </div>

            {/* Contact Section */}
            <div className="footer-contact">
                {contact.address && <p>{contact.address}</p>}
                {contact.email && <p>Email: <a href={`mailto:${contact.email}`}>{contact.email}</a></p>}
                {contact.phone && <p>Phone: {contact.phone}</p>}
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <p>{copyrightText || `© ${new Date().getFullYear()} Your Company. All rights reserved.`}</p>
            </div>
        </footer>
    );
}
