"use server"; 

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, error: "Alla fält måste fyllas i." };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Nytt meddelande <onboarding@resend.dev>', 
      to: ['christofer.codes@gmail.com'], 
      subject: `💼 Ny kontakt: ${name}`,
      replyTo: email, 
      text: `Meddelande från: ${name} (${email})\n\n${message}`,
    });

    if (error) {
      console.error("Resend Error:", error);
      return { success: false, error: "Kunde inte skicka mejlet." };
    }

    
    return { success: true };

  } catch (error) {
    console.error("System Error:", error);
    return { success: false, error: "Ett oväntat fel uppstod." };
  }
}