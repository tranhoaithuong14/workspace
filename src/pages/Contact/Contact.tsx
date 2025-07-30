import { useState } from 'react';

import type { FC, FormEvent } from 'react';

import styles from './Contact.module.less';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className='container'>
        <div className={styles.successMessage}>
          <div className={styles.successIcon}>✅</div>
          <h2>Thank you for your message!</h2>
          <p>We&apos;ll get back to you as soon as possible.</p>
        </div>
      </div>
    );
  }

  return (
    <div className='container'>
      <div className={styles.contact}>
        <header className={styles.header}>
          <h1 className={styles.title}>Contact Us</h1>
          <p className={styles.subtitle}>
            Get in touch with us. We&apos;d love to hear from you!
          </p>
        </header>

        <div className={styles.content}>
          <div className={styles.info}>
            <h2>Get in Touch</h2>
            <div className={styles.infoItem}>
              <h3>📧 Email</h3>
              <p>contact@reactspa.com</p>
            </div>
            <div className={styles.infoItem}>
              <h3>📱 Phone</h3>
              <p>+1 (555) 123-4567</p>
            </div>
            <div className={styles.infoItem}>
              <h3>📍 Address</h3>
              <p>
                123 Web Development St
                <br />
                Tech City, TC 12345
              </p>
            </div>
            <div className={styles.infoItem}>
              <h3>🕒 Business Hours</h3>
              <p>
                Monday - Friday: 9:00 AM - 6:00 PM
                <br />
                Saturday - Sunday: Closed
              </p>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor='name' className={styles.label}>
                Name *
              </label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor='email' className={styles.label}>
                Email *
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor='subject' className={styles.label}>
                Subject *
              </label>
              <input
                type='text'
                id='subject'
                name='subject'
                value={formData.subject}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor='message' className={styles.label}>
                Message *
              </label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                className={styles.textarea}
                rows={5}
                required
              />
            </div>

            <button
              type='submit'
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;