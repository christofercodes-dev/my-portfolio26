"use client";
import React from 'react';
import styles from './Footer.module.css';
import { FiGithub, FiLinkedin, FiTwitter, FiArrowUp } from 'react-icons/fi';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.topSection}>
                    <div className={styles.brand}>
                        <div className={styles.logo}>
                            <span className={styles.logoDot}></span> Christofer<span className={styles.highlight}>.Codes</span>
                        </div>
                        <p className={styles.tagline}>
                            Skapar digital magi med kod och design.
                        </p>
                    </div>

                    <div className={styles.links}>
                        <h4>Navigation</h4>
                        <ul>
                            <li><a href="#projects">Projekt</a></li>
                            <li><a href="#skills">Stack</a></li>
                            <li><a href="#contact">Kontakt</a></li>
                        </ul>
                    </div>

                   {/*  <div className={styles.socials}>
                        <h4>Sociala medier</h4>
                        <div className={styles.socialIcons}>
                            <a href="#" aria-label="Github"><FiGithub /></a>
                            <a href="#" aria-label="LinkedIn"><FiLinkedin /></a>
                            <a href="#" aria-label="Twitter"><FiTwitter /></a>
                        </div>
                    </div> */}
                </div>

                <div className={styles.bottomSection}>
                    <p>&copy; {new Date().getFullYear()} chrisotofer.codes. Alla rättigheter förbehållna.</p>
                    <button onClick={scrollToTop} className={styles.scrollTop} aria-label="Scrolla till toppen">
                        <FiArrowUp />
                    </button>
                </div>
            </div>
        </footer>
    );
}