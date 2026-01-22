"use client";
import React from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.css';
import { FiCode, FiUser, FiCpu, FiExternalLink } from 'react-icons/fi';

export default function AboutPage() {
    const skills = ["React / Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Framer Motion"];

    return (
        <div className={styles.aboutWrapper}>
            <div className={styles.container}>
                <motion.div
                    className={styles.textSection}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className={styles.badge}>
                        <FiUser /> <span>Om mig</span>
                    </div>
                    <h1 className={styles.title}>
                        Från examen till <span className={styles.highlight}>fullstack-utveckling</span>.
                    </h1>

                    <div className={styles.description}>
                        <p>
                            Efter att ha tagit min examen förra sommaren har jag dedikerat all min tid åt att fördjupa mig i modern webbutveckling. Jag drivs av att skapa lösningar som inte bara fungerar, utan som också ger en fantastisk användarupplevelse.
                        </p>
                        <p>
                            Under min utbildning och mina efterföljande projekt har jag fastnat för Next.js och TypeScript. Jag älskar utmaningen i att gå från en tom skärm till en färdig, fungerande applikation där varje detalj i koden räknas.
                        </p>
                        <p>
                            Som ny i branschen är jag extremt motiverad att fortsätta lära mig och bidra till spännande projekt. Jag letar nu efter min nästa utmaning där jag kan sätta mina kunskaper på prov och växa tillsammans med ett team.
                        </p>
                    </div>

                    <div className={styles.skillsGrid}>
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill}
                                className={styles.skillTag}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <FiCode className={styles.skillIcon} />
                                {skill}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    className={styles.imageSection}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className={styles.imageCard}>
                        <div className={styles.imagePlaceholder}>
                            <FiCpu size={80} className={styles.floatingIcon} />
                        </div>
                        <div className={styles.stats}>
                            <div className={styles.statItem}>
                                <span>2+</span>
                                <p>Års erfarenhet</p>
                            </div>
                            <div className={styles.statItem}>
                                <span>3+</span>
                                <p>Projekt klara</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}