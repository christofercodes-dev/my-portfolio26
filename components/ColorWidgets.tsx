"use client";
import { motion } from "framer-motion";
import styles from "./ColorWidgets.module.css";

const services = [
  { id: "01", title: "Webbutveckling", desc: "Next.js, React & Performance" },
  { id: "02", title: "Digital Design", desc: "UI/UX & Prototyping" },
  { id: "03", title: "Content Creation", desc: "Foto & Videoproduktion" },
];

export default function ColorWidgets() {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Expertis</span>
          <h2 className={styles.title}>Hur jag kan hjälpa dig.</h2>
        </div>

        <div className={styles.list}>
          {services.map((service) => (
            <motion.div 
              key={service.id} 
              className={styles.serviceItem}
              whileHover={{ x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.left}>
                <span className={styles.number}>{service.id}</span>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
              </div>
              <p className={styles.serviceDesc}>{service.desc}</p>
              <div className={styles.line} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}