import styles from "./Skills.module.css";

function Skills(){
    const skills = [
        "JavaScript",
        "HTML",
        "CSS",
        "React",
        "Node",
        "VB",
        "SQL",
        //"Git",
        "Game Development"
    ];

    return (
        <section className={styles.skills}>
            <h2>My Skills</h2>

            <div className={styles.container}>
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