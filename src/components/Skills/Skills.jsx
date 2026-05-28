import styles from "./Skills.module.css";

function Skills() {
   
    const skillCategories = [
        {
            id: "frontend",
            title: "Frontend Development",
            items: ["JavaScript", "HTML", "CSS", "React"]
        },
        {
            id: "backend",
            title: "Backend & Systems",
            items: ["Node", "VB", "SQL", "Python"] 
        },
        {
            id: "gamedev",
            title: "Creative & Game Dev",
            items: ["Game Development"]
        }
    ];

    return (
        <section className={styles.skills} id="skills">
            <h2 className={styles.sectionTitle}>My Skills</h2>

            <div className={styles.mainContainer}>
                {skillCategories.map((category) => (
                    <div key={category.id} className={styles.categoryRow}>
                        <h3 className={styles.categoryTitle}>{category.title}</h3>
                        <div className={styles.cardGrid}>
                            {category.items.map((skill) => (
                                <div key={skill} className={styles.card}>
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;