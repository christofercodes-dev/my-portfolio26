"use client";
import React, { useRef, useState } from "react";
import { motion, useSpring, useTransform, MotionValue } from "framer-motion";
import styles from "./TechStack.module.css";

interface Tech {
  name: string;
  level: string;
}

const technologies: Tech[] = [
  { name: "Next.js", level: "Expert" },
  { name: "TypeScript", level: "Advanced" },
  { name: "React", level: "Expert" },
  { name: "CSS Modules", level: "Advanced" },
  { name: "Framer Motion", level: "Intermediate" },
  { name: "Node.js", level: "Advanced" },
  { name: "PostgreSQL", level: "Intermediate" },
  { name: "Vercel", level: "Expert" },
];

const TechCard = ({ tech }: { tech: Tech }) => {
  // 1. Definiera typen för ref (HTMLDivElement)
  const cardRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useSpring(0, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 150, damping: 20 });
  const [isHovered, setIsHovered] = useState(false);

  // 2. Definiera typen för MouseEvent
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Beräkna positionen
    mouseX.set(e.clientX - (rect.left + rect.width / 2));
    mouseY.set(e.clientY - (rect.top + rect.height / 2));
  };

  // 3. Skapa transform-värdena utanför return för tydlighet
  const rotateX = useTransform(mouseY, [-100, 100], [15, -15]);
  const rotateY = useTransform(mouseX, [-100, 100], [-15, 15]);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        mouseX.set(0);
        mouseY.set(0);
      }}
      className={styles.techCard}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      } as any} // 'as any' behövs ofta för transformStyle i motion.div
    >
      <div className={styles.cardContent} style={{ transform: "translateZ(30px)" }}>
        <span className={styles.techName}>{tech.name}</span>
        <span className={styles.techLevel}>{tech.level}</span>
      </div>
      
      <motion.div 
        className={styles.glow}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
};

export default function TechStack() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Technological Arsenal</h2>
          <p className={styles.subtitle}>Verktygen jag använder för att transformera idéer till kod.</p>
        </div>
        
        <div className={styles.grid}>
          {technologies.map((tech) => (
            <TechCard key={tech.name} tech={tech} />
          ))}
        </div>
      </div>
    </section>
  );
}