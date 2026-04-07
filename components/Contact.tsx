"use client";
import React, { useState } from "react";
import styles from "./Contact.module.css";
import { motion } from "framer-motion";
import { FiSend, FiMail, FiUser, FiMessageSquare, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import { sendEmail } from '@/app/actions'; // Se till att sökvägen stämmer

export default function Contact() {
  const [isPending, setIsPending] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null, msg: string }>({ type: null, msg: "" });

  async function handleSubmit(formData: FormData) {
    setIsPending(true);
    setStatus({ type: null, msg: "" });

    const result = await sendEmail(formData);

    setIsPending(false);

    if (result.success) {
      setStatus({ type: 'success', msg: "System: Meddelande levererat." });
      // Valfritt: Töm formuläret här om du vill
    } else {
      setStatus({ type: 'error', msg: result.error || "System: Transmission misslyckades." });
    }
  }

  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>READY_TO_BUILD</div>
          <h2 className={styles.title}>Starta <span className={styles.gradient}>Projektet</span></h2>
          <p className={styles.subtitle}>
            Redo för nästa steg?
          </p>
        </div>

        <div className={styles.wrapper}>
          <div className={styles.infoSide}>
            <div className={styles.statusCard}>
              <div className={styles.statusDot} />
              <span>Available for new commissions</span>
            </div>
            <div className={styles.contactMethod}>
              <FiMail className={styles.icon} />
              <div>
                <span className={styles.label}>Direct Inquiry</span>
                <p>christofer.codes@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Formuläret använder action={handleSubmit} */}
          <motion.form 
            action={handleSubmit}
            className={styles.form}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className={styles.inputField}>
              <FiUser className={styles.inputIcon} />
              <input name="name" type="text" placeholder="Namn" required />
            </div>

            <div className={styles.inputField}>
              <FiMail className={styles.inputIcon} />
              <input name="email" type="email" placeholder="E-postadress" required />
            </div>

            <div className={styles.inputField}>
              <FiMessageSquare className={styles.inputIcon} />
              <textarea name="message" placeholder="Beskriv ditt projekt..." rows={5} required />
            </div>

            <button type="submit" className={styles.submitBtn} disabled={isPending}>
              <span>{isPending ? "Skickar..." : "Skicka"}</span>
              {isPending ? <div className={styles.loader} /> : <FiSend className={styles.sendIcon} />}
            </button>

            {status.type && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }}
                className={`${styles.statusMessage} ${status.type === 'success' ? styles.success : styles.error}`}
              >
                {status.type === 'success' ? <FiCheckCircle /> : <FiAlertCircle />}
                {status.msg}
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}