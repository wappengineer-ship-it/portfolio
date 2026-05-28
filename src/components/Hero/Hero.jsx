// src/components/Hero/Hero.jsx
import React from 'react';
import styles from './Hero.module.css';

function Hero() {
  const handleScroll = (e) => {
    e.preventDefault();
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.hero}>
      <h1>Hello, I'm Julian</h1>
      <p>
        Front-end heavy full-stack developer creating websites,
        games and creative projects.
      </p>
      <button onClick={handleScroll} className={styles.buttonLink}>
        View Skills
      </button>
    </section>
  );
}

export default Hero;