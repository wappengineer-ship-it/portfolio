import styles from "./Skills.module.css";

function Skills(){
    const skills = [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "Git",
        "Game Development"
    ];

    return (
        <section className={styles.skills}>
            <h2>My Skills</h2>

            <div ClassName={styles.container}>
                {skills.map((skill) => (
                    <div
                        key={skill}
                        className={styles.card}
                    >
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;