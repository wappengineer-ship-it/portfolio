import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <h1>Hello, I'm Julian</h1>

      <p>
        Developer creating websites,
        games and creative projects.
      </p>

      <button>View Projects</button>
    </section>
  );
}

export default Hero;