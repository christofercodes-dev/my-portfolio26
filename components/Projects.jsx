"use client";
import React from 'react';
import styles from './Projects.module.css';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const projects = [
    {
        title: "Neurawave.se",
        description: "Hemsida åt ett startup företag",
        tags: ["React Native", "TypeScript", "css"],
       /*  link: "#",
        github: "#" */
    },
    {
        title: "bythus.nu",
        description: "Mäklarhemsida med API-intregration",
        tags: ["React Native", "Sanity"],
        
    },
];

export default function Projects() {
    return (
        <section id="projects" className={styles.projectsSection}>
            <div className={styles.container}>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={styles.header}
                >
                    <h2 className={styles.title}>Utvalda <span className={styles.highlight}>Projekt</span></h2>
                    <p className={styles.subtitle}>En samling av mina senaste arbeten inom webb- och apputveckling.</p>
                </motion.div>

                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <motion.div 
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className={styles.cardImage}>
                                <div className={styles.placeholder}>
                                    <span>{project.title}</span>
                                </div>
                            </div>
                            <div className={styles.cardContent}>
                                <div className={styles.tags}>
                                    {project.tags.map(tag => <span key={tag} className={styles.tag}>{tag}</span>)}
                                </div>
                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <p className={styles.projectDesc}>{project.description}</p>
                                <div className={styles.footer}>
                         {/*            <a href={project.github} className={styles.iconLink}><FiGithub /></a>
                                    <a href={project.link} className={styles.iconLink}><FiExternalLink /></a> */}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}