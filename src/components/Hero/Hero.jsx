import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <h1>Hello, I'm Julian</h1>

      <p>
        Front-end heavy full-stack developer creating websites,
        games and creative projects.
      </p>

      <a href="#skills" className={styles.buttonLink}>View Skills</a>
    </section>
  );
}

export default Hero;