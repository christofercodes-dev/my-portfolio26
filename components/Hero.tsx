"use client";
import React, { useCallback } from 'react';
import styles from './Hero.module.css';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { Variants, motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim"; 

export default function HeroSection() {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
        },
    };

    return (
        <section className={styles.heroWrapper}>
            <Particles
                id="tsparticles"
                className={styles.particlesBackground}
                init={particlesInit}
                options={{
                    fullScreen: { enable: false }, 
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onHover: { enable: true, mode: "repulse" },
                            resize: true,
                        },
                        modes: {
                            repulse: { distance: 100, duration: 0.4 },
                        },
                    },
                    particles: {
                        color: { value: "#3b82f6" },
                        links: {
                            color: "#3b82f6",
                            distance: 150,
                            enable: true,
                            opacity: 0.2,
                            width: 1,
                        },
                        move: {
                            enable: true,
                            speed: 1.2,
                            direction: "none",
                            random: false,
                            straight: false,
                            outModes: { default: "out" },
                        },
                        number: {
                            density: { enable: true, area: 800 },
                            value: 60,
                        },
                        opacity: { value: 0.4 },
                        shape: { type: "circle" },
                        size: { value: { min: 1, max: 3 } },
                    },
                    detectRetina: true,
                }}
            />

            <motion.div
                className={styles.container}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className={styles.content}>
                    <motion.div variants={itemVariants} className={styles.badge}>
                        Tillgänglig för nya projekt
                    </motion.div>

                    <motion.h1 className={styles.heading} variants={itemVariants}>
                        Jag hjälper dig bygga din <span className={styles.highlight}>nästa</span> hemsida
                    </motion.h1>

                    <motion.p className={styles.subheading} variants={itemVariants}>
                        Nyexaminerad fullstack-utvecklare som förvandlar dina idéer till moderna, snabba och snygga webblösningar.
                    </motion.p>

                    <motion.div className={styles.actions} variants={itemVariants}>
                        <Link href="#projects" className={styles.primaryBtn}>
                            Se mitt arbete
                        </Link>
                        <Link href="#contact" className={styles.secondaryBtn}>
                            Låt oss prata
                        </Link>
                    </motion.div>
                </div>

                <motion.div
                    className={styles.visual}
                    whileHover={{ scale: 1.05, rotateY: 10, rotateX: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                    <div className={styles.cardStack}>
                        <div className={styles.cardBg}></div>
                        <div className={styles.cardMain}>
                            <div className={styles.cardHeader}>
                                <div className={styles.dots}>
                                    <span className={`${styles.dot} ${styles.red}`}></span>
                                    <span className={`${styles.dot} ${styles.yellow}`}></span>
                                    <span className={`${styles.dot} ${styles.green}`}></span>
                                </div>
                                <span className={styles.fileName}>Developer.ts</span>
                            </div>
                            <div className={styles.cardBody}>
                                <pre className={styles.code}>
                                    <code>
                                        <span className={styles.keyword}>class</span> <span className={styles.class}>FullstackDeveloper</span> {"{"}<br />
                                        &nbsp;&nbsp;<span className={styles.comment}>// Min tech stack</span><br />
                                        &nbsp;&nbsp;constructor() {"{"}<br />
                                        &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.this}>this</span>.frontend = [<span className={styles.string}>"React"</span>, <span className={styles.string}>"Next.js"</span>];<br />
                                        &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.this}>this</span>.styling = [<span className={styles.string}>"Tailwind"</span>, <span className={styles.string}>"Framer Motion"</span>];<br />
                                        &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.this}>this</span>.backend = [<span className={styles.string}>"Node.js"</span>, <span className={styles.string}>"TypeScript"</span>];<br />
                                        &nbsp;&nbsp;{"}"}<br /><br />
                                        &nbsp;&nbsp;<span className={styles.method}>isHiring</span>() {"{"}<br />
                                        &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.keyword}>return</span> <span className={styles.boolean}>true</span>;<br />
                                        &nbsp;&nbsp;{"}"}<br />
                                        {"}"}
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}