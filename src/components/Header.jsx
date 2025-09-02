import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './Header.css';

/**
 * Header Component - Template
 *
 * Props:
 *   logo: JSX element or text/logo image
 *   menuItems: Array of objects { text: string, href: string }
 *   cta: Object { text: string, href: string } for call-to-action button
 *
 * Usage Example:
 * <Header
 *   logo={<img src="logo.png" alt="Logo" />}
 *   menuItems={[
 *     { text: 'Home', href: '/' },
 *     { text: 'About', href: '/about' },
 *     { text: 'Services', href: '/services' },
 *   ]}
 *   cta={{ text: 'Book Now', href: '/book' }}
 * />
 */
export default function Header({ logo, menuItems, cta }) {
    const [open, setOpen] = useState(false);

    // -----------------------------
    // Close mobile menu when resizing to desktop
    // -----------------------------
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && open) {
                setOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [open]);

    return (
        <>
            {/* ========================
          Header Bar
      ======================== */}
            <header className="header">
                <div className="header-container">

                    {/* Logo: can be an image, text, or JSX */}
                    <div className="header-logo">
                        {logo || 'Logo'}
                    </div>

                    {/* Hamburger / X button for mobile */}
                    <button
                        className="hamburger"
                        onClick={() => setOpen(!open)}
                        aria-label={open ? 'Close menu' : 'Open menu'}
                    >
                        {open ? '✖' : '☰'}
                    </button>

                    {/* Desktop Navigation */}
                    <nav className="header-nav-desktop">
                        {menuItems && menuItems.map(item => (
                            <a key={item.text} href={item.href}>{item.text}</a>
                        ))}

                        {/* Call-to-action button */}
                        {cta && (
                            <a className="header-cta" href={cta.href}>{cta.text}</a>
                        )}


                    </nav>
                </div>
            </header>

            {/* ========================
          Mobile Dropdown Menu (below header)
      ======================== */}
            <nav className={`header-nav-mobile ${open ? 'open' : ''}`}>
                {menuItems && menuItems.map(item => (
                    item.href.startsWith('/') ? (
                        <Link key={item.text} to={item.href}>{item.text}</Link>
                    ) : (
                        <a key={item.text} href={item.href}>{item.text}</a>
                    )
                ))}

                {cta && (
                    <a className="header-cta" href={cta.href}>{cta.text}</a>
                )}
            </nav>
        </>
    );
}
