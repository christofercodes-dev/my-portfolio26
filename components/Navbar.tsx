"use client";
import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          CHRISTOFER <span className={styles.dot}></span><span className={styles.hideMobile}>CODES</span>
        </div>

        <div className={styles.navLinks}>
{/*           <a href="#projects" className={styles.link}>Projekt</a>
 */}          <a href="#contact" className={styles.contactBtn}>Kontakt</a>
        </div>
      </div>
    </nav>
  );
}