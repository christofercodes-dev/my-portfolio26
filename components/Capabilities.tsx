"use client";
import React from "react";
import styles from "./Capabilities.module.css";
import { FiCode, FiCpu, FiLayout } from "react-icons/fi"; // Installera react-icons om du inte har det

const skills = [
  {
    title: "Frontend Architecture",
    category: "Development",
    tools: ["Next.js", "TypeScript", "Framer Motion"],
    desc: "Konstruktion av skalbara och typ-säkra webbapplikationer med fokus på återanvändbar komponentstruktur.",
    icon: <FiLayout />,
    accent: "#a29bfe"
  },
  {
    title: "Creative Engineering",
    category: "Design Systems",
    tools: ["CSS Modules", "Tailwind", "GSAP"],
    desc: "Implementering av avancerad estetik och flytande interaktioner som förstärker den digitala identiteten.",
    icon: <FiCode />,
    accent: "#00d2ff"
  },
 /*  {
    title: "System Logic",
    category: "Infrastructure",
    tools: ["Sanity CMS", "Node.js"],
    desc: "Robust hantering av data och innehåll genom moderna headless-lösningar och optimerade API:er.",
    icon: <FiCpu />,
    accent: "#ffcb3c"
  } */
];

export default function Capabilities() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
        <div className={styles.badge}>KOMPETENS</div>
<h2 className={styles.title}>Mitt digitala <span className={styles.gradient}>Hantverk</span></h2>
        </div>

        <div className={styles.grid}>
          {skills.map((skill, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.topRow}>
                <div className={styles.iconBox} style={{ color: skill.accent }}>
                  {skill.icon}
                </div>
                <span className={styles.category}>{skill.category}</span>
              </div>

              <h3 className={styles.cardTitle}>{skill.title}</h3>
              <p className={styles.desc}>{skill.desc}</p>

              <div className={styles.techList}>
                {skill.tools.map((tool) => (
                  <span key={tool} className={styles.toolTag}>
                    {tool}
                  </span>
                ))}
              </div>

              {/* Dekorativ "blueprint"-linje i botten */}
              <div className={styles.borderBottom} style={{ backgroundColor: skill.accent }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}