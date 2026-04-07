"use client";
import React from "react";
import styles from "./Footer.module.css";
import { FiGithub, FiLinkedin, FiInstagram, FiArrowUp } from "react-icons/fi";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.brand}>
            <h3 className={styles.logo}>
              CHRISTOFER <span className={styles.gradient}>CODES</span>
            </h3>
            
          </div>

        {/*   <div className={styles.socials}>
            <a href="https://github.com/dittanvändarnamn" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
              <FiGithub />
            </a>
            <a href="https://linkedin.com/in/dittnamn" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
              <FiLinkedin />
            </a>
            <a href="https://instagram.com/dittnamn" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
              <FiInstagram />
            </a>
          </div> */}
        </div>

        <div className={styles.divider} />

        <div className={styles.bottomSection}>
          <p className={styles.copyright}>
            © {currentYear} — Utvecklad av Christofer. <span className={styles.version}>v2.0.26</span>
          </p>
          
          <button onClick={scrollToTop} className={styles.scrollTop} aria-label="Scrolla till toppen">
            System.up() <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}