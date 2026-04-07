"use client";
import React from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Bakgrundseffekter */}
      <div className={styles.abstractGrid} />
      <div className={styles.blob1} />
      <div className={styles.blob2} />

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>v2.0.26 — stable_build</div>
          <h1 className={styles.title}>
            Fullstack <span className={styles.gradientText}>Utvecklare</span>
          </h1>
          <p className={styles.subtitle}>
            Med passion för design och fokus på att skapa användarvänliga lösningar.
            Jag hjälper dig att förvandla idéer till färdiga digitala produkter.
          </p>
        </div>

        {/* Kod-biten med ny design */}
        <div className={styles.codeWrapper}>
          <div className={styles.codeGlass}>
            <div className={styles.codeHeader}>
              <div className={styles.windowControls}>
                <span className={styles.dot} />
                <span className={styles.dot} />
                <span className={styles.dot} />
              </div>
              <div className={styles.tab}>developer.config</div>
            </div>
            <pre className={styles.codeArea}>
              <code>
                <span className={styles.purple}>import</span> {'{'} <span className={styles.cyan}>Build</span> {'}'} <span className={styles.purple}>from</span> <span className={styles.yellow}>"architecture"</span>;
                <br /><br />
                <span className={styles.comment}>// Initiera nytt projekt</span>
                <br />
                <span className={styles.purple}>const</span> <span className={styles.cyan}>portfolio</span> = <span className={styles.purple}>new</span> <span className={styles.cyan}>Build</span>({'{'}
                <br />
                &nbsp;&nbsp;tech: [<span className={styles.yellow}>"Next.js"</span>, <span className={styles.yellow}>"TS"</span>],
                <br />
                &nbsp;&nbsp;ux: <span className={styles.yellow}>"High_End"</span>,
                <br />
                &nbsp;&nbsp;passion: <span className={styles.yellow}>"Building cool things"</span>,
                <br />
                &nbsp;&nbsp;available: <span className={styles.purple}>true,</span><span className={styles.comment}> // Hör av dig!✌🏼</span>
                <br />
                {'}'});
              </code>
            </pre>
          </div>
          <div className={styles.codeShadow} />
        </div>
      </div>
    </section>
  );
}