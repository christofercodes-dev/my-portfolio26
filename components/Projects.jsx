"use client";
import React from "react";
import Image from "next/image";
import styles from "./Projects.module.css";

const myProjects = [
  {
    id: "01",
    title: "bythus.nu",
    code: "System.deploy(RealEstate)",
    tech: ["Next.js", "Sanity", "CSS Modules"],
    desc: "En modern, innehållsdriven plattform för fastighetsförmedling. Fokus på hög prestanda och ett skräddarsytt CMS för sömlös hantering av objekt.",
    imgSrc: "/images/i1.png",
    accent: "#a29bfe", // Lila
    link: "https://bythus.nu"
  },
  {
    id: "02",
    title: "neurawave.se",
    code: "UI.init(StartupIdentity)",
    tech: ["React", "Framer Motion", "CSS"],
    desc: "Digital identitet och landningssida för ett tech-startup. Framtagen med fokus på innovativt UI, mjuka interaktioner och en framtidsorienterad upplevelse.",
    imgSrc: "/images/i2.png",
    accent: "#00d2ff", // Cyan
    link: "https://neurawave.se"
  }
];

export default function Projects() {
  return (
    <section className={styles.section} id="projects">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>PORTFOLIO</div>
          <h2 className={styles.title}>Mina <span className={styles.gradient}>Arbeten</span></h2>
        </div>

        <div className={styles.grid}>
          {myProjects.map((project) => (
            <div key={project.id} className={styles.card}>
              {/* Individuell glöd-effekt */}
              <div 
                className={styles.cardGlow} 
                style={{ background: `radial-gradient(circle at 50% 0%, ${project.accent}15 0%, transparent 70%)` }} 
              />
              
              <div className={styles.imageWrapper}>
                <Image 
                  src={project.imgSrc} 
                  alt={project.title}
                  fill
                  className={styles.projectImg}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className={styles.imageOverlay} />
              </div>

              <div className={styles.cardContent}>
                <div className={styles.meta}>
                  <code className={styles.code} style={{ color: project.accent }}>{project.code}</code>
                  <span className={styles.id}>[{project.id}]</span>
                </div>

                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.desc}>{project.desc}</p>

                <div className={styles.techTags}>
                  {project.tech.map(t => <span key={t}>{t}</span>)}
                </div>

                <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.launchBtn}>
                  Live Preview ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}