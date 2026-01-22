"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import { motion } from 'framer-motion';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Känner av scroll och skärmstorlek
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        handleResize(); // Kör direkt vid mount
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Stäng menyn vid klick
    const closeMenu = () => setIsOpen(false);

    return (
        <motion.nav 
            className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className={styles.navContainer}>
                <Link href="/" className={styles.logo} onClick={closeMenu}>
                    <span className={styles.logoDot}></span> Christofer<span className={styles.highlight}>.codes</span>
                </Link>

                <button 
                    className={`${styles.hamburger} ${isOpen ? styles.active : ''}`} 
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Meny"
                >
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </button>

                <ul className={`${styles.navLinks} ${isOpen ? styles.navActive : ''}`}>
                    <motion.li 
                        animate={isMobile ? (isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }) : { opacity: 1, x: 0 }}
                    >
                        <a href="/#projects" onClick={closeMenu}>Projekt</a>
                    </motion.li>
                    
                    <motion.li 
                        animate={isMobile ? (isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }) : { opacity: 1, x: 0 }}
                    >
                        <Link href="/about" onClick={closeMenu}>Om mig</Link>
                    </motion.li>

                    {/* Denna syns bara inuti hamburgermenyn på mobil */}
                    <li className={styles.mobileOnly}>
                        <Link href="/#contact" className={styles.contactBtn} onClick={closeMenu}>
                            Kontakta mig
                        </Link>
                    </li>
                </ul>

                {/* Denna syns bara på desktop bredvid länkarna */}
                <div className={styles.desktopOnly}>
                    <Link href="/#contact" className={styles.contactBtn}>
                        Kontakta mig
                    </Link>
                </div>
            </div>
        </motion.nav>
    );
}