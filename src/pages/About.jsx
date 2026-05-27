import styles from "./About.module.css";

function About() {
  return (
    <section className={styles.aboutPage}>
      <div className={styles.container}>
        <h1 className={styles.title}>About Me</h1>
        
        <div className={styles.contentGrid}>
          {/* Left Column: Your Story */}
          <div className={styles.storyColumn}>
            <p className={styles.leadText}>
              Hi, I'm Julian. I'm a full-stack developer with 5 years of professional experience building practical, high-performance web applications and creative projects.
            </p>
            <p className={styles.bodyText}>
              For the past half-decade, I've worked deeply with core web technologies. My professional background is rooted in writing pure, highly optimized Vanilla JavaScript and building screen-based layouts. Because I work closely with custom systems, I excel at going into the backend to reverse-engineer logic, manage server infrastructure, and ensure daily data backups run flawlessly.
            </p>
            <p className={styles.bodyText}>
              Whether I'm writing Node.js, diving into VB, or working with databases, I love solving backend puzzles. While I'm comfortable writing standard SQL databases, I am constantly leveling up my skills to master complex nested queries and advanced data structures. 
            </p>
            <p className={styles.bodyText}>
              Lately, I’ve been channeling my deep JS foundations into modern frontend best practices—refining my HTML and CSS architecture through FreeCodeCamp and building modular applications in React. On the creative side, I use these skills to engineer independent projects, ranging from browser-based survival games to interactive 2D top-down RPGs.
            </p>
          </div>

          {/* Right Column: Quick Highlights / Philosophy */}
          <div className={styles.factColumn}>
            <div className={styles.factCard}>
              <h3>5 Years Experience</h3>
              <p>Proven track record of maintaining production systems, reverse-engineering code, and writing robust script logic.</p>
            </div>
            <div className={styles.factCard}>
              <h3>What I Do</h3>
              <ul>
                <li><strong>Core Logic:</strong> Vanilla JS expert & clean code architecture</li>
                <li><strong>Backend:</strong> Node, VB, server backups & SQL databases</li>
                <li><strong>Creative:</strong> React UI layouts & HTML5 game development</li>
                <li><strong>Media:</strong> Technical video guides & promotional media</li> {/* Added this! */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;