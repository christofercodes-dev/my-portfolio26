"use client";
import React, { useState } from 'react'; 
import styles from './Contact.module.css';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiSend, FiInstagram } from 'react-icons/fi';
import { sendEmail } from '@/app/actions';

export default function Contact() {
    const [isPending, setIsPending] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");

    async function handleSubmit(formData: FormData) {
        setIsPending(true);
        setStatusMessage("");

        const result = await sendEmail(formData);

        setIsPending(false);

        if (result.success) {
            setStatusMessage("Tack! Meddelandet har skickats.");
        } else {
            setStatusMessage("Något gick fel. Försök igen senare.");
        }
    }

    return (
        <section id="contact" className={styles.contactSection}>
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className={styles.title}>Låt oss <span className={styles.highlight}>Prata</span></h2>
                    <p className={styles.subtitle}>Har du ett projekt i åtanke eller vill du bara säga hej? Skicka ett meddelande!</p>
                </motion.div>

                <div className={styles.content}>
                    {/* Info-del */}
                    <motion.div
                        className={styles.contactInfo}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.infoCard}>
                            <FiMail className={styles.icon} />
                            <div>
                                <h4>E-post</h4>
                                <p>christofer.codes@gmail.com</p>
                            </div>
                        </div>

                        <div className={styles.socialLinks}>
                            <a href="#" className={styles.socialIcon}><FiInstagram /></a>
                        </div>
                    </motion.div>

                    {/* Formulär */}
                    <motion.form
                        action={handleSubmit} 
                        className={styles.form}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.inputGroup}>
                            <input name="name" type="text" placeholder="Namn" required />
                        </div>
                        <div className={styles.inputGroup}>
                            <input name="email" type="email" placeholder="E-post" required />
                        </div>
                        <div className={styles.inputGroup}>
                            <textarea name="message" placeholder="Ditt meddelande" rows={5} required></textarea>
                        </div>

                        <button type="submit" disabled={isPending} className={styles.submitBtn}>
                            {isPending ? (
                                <span className={styles.loader}></span> 
                            ) : (
                                <>Skicka meddelande <FiSend /></>
                            )}
                        </button>

                        {statusMessage && (
                            <p className={styles.statusMessage}>{statusMessage}</p>
                        )}
                    </motion.form>
                </div>
            </div>
        </section>
    );
}