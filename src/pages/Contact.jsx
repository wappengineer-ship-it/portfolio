import React, { useState } from 'react';
import styles from './Contact.module.css';

function Contact() {
  const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
  })

  function handleChange(e){
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e){
    e.preventDefault();

    const myEmail = "j.d.vanloggerenberg@gmail.com";

    const subject = encodeURIComponent(`Portfolio Message from ${formData.name}`);

    const body = encodeURIComponent(
      `Hi, my name is ${formData.name}.\n\n` +
      `Message:\n${formData.message}\n\n` +
      `---` +
      `\nYou can reply to me at: ${formData.email}`
    );

    window.location.href = `mailto:${myEmail}?subject=${subject}&body=${body}`;
  }

  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionHeading}>Get in touch</h2>
        <p className={styles.sectionSubtitle}>
          Have a project in mind, want to collaborate, or just want to chat? Drop a message below to launch your mail client.
        </p>

        {/* Form container matches your projectCard style */}
        <div className={styles.formCard}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="name" className={styles.fieldLabel}>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className={styles.inputField}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.fieldLabel}>Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className={styles.inputField}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="message" className={styles.fieldLabel}>Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here..."
                rows="6"
                className={styles.inputField}
                required
              ></textarea>
            </div>

            <button type="submit" className={`${styles.linkButton} ${styles.primaryLink}`}>
              Launch Mail
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact;