import React from 'react';
import styles from './Projects.module.css';

function Projects(){
  const projectList = [
    {
      id: 1,
      category: 'production',
      title: 'Enterprise Logic Engine & Server Management',
      timeline: '5 Years Professional Experience',
      description: 'Maintained and optimized custom screen-based software systems running on pure Vanilla JavaScript. Responsible for backend reverse-engineering across Node.js and legacy environments, alongside designing automated nightly data backups for SQL relational databases to ensure zero data loss.',
      tags: ['Vanilla JS', 'Node.js', 'SQL', 'Server Maintenance']
    },
    {
      id: 2,
      category: 'game',
      title: 'Rectify: Vanilla JS Canvas RPG Engine',
      timeline: 'Hand-Coded Milestone',
      description: 'A retro side-scrolling survival RPG built completely from scratch using pure JavaScript and HTML5 Canvas. Features procedural shifting terrain algorithms, a coordinate-tracking event trigger matrix, persistent local storage data saving, and time-differential real-time banking calculations.',
      tags: ['Vanilla JS', 'HTML5 Canvas', 'Game Loop', 'Local Storage'],
      links: {
        github: 'https://github.com/wappengineer-ship-it/rectify-old', 
        itch: 'https://wappengineer.itch.io/rectify-original' 
      }
    },
    {
      id: 3,
      category: 'game',
      title: 'Void Survivor & 2D Top-Down RPGs',
      timeline: 'Modern Prototypes',
      description: 'Independent browser-based game projects developed utilizing an efficient, modern AI-assisted prototyping workflow. Focused engineering efforts on building custom character sprites, fine-tuning complex physics merger logic, virtual joystick mobile optimization, and mechanics tuning.',
      tags: ['React', 'JavaScript', 'AI Workflows', 'Mobile Responsive'],
      links: {
        itch: 'https://itch.io'
      }
    },
    {
      id: 4,
      category: 'media',
      title: 'Technical Documentation & Product Media',
      timeline: 'Product Communications',
      description: 'Produced comprehensive visual guides, software walkthroughs, and promotional video media for complex production applications. Bridged the gap between engineering and user experience by translating deep backend mechanics into accessible interactive materials.',
      tags: ['Video Production', 'Technical Writing', 'Product Demos', 'UX/UI Training']
    }
  ];

  return (
    <section className={styles.projectsSection} id="projects">
        <div className={styles.container}>
          <h2 className={styles.sectionHeading}>Featured Work & Projects</h2>
          <p className={styles.sectionSubtitle}>
            A balance of stable enterprise systems maintenance, raw engineering logic, and media communication.
          </p>
        </div>
        <div className={styles.projectsGrid}>
          {projectList.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.cardHeader}>
                <span className={`${styles.badge} ${styles[project.category]}`}>
                  {project.category==='production' ? '💼 Production Work' :
                   project.category==='game' ? '🎮 Game Dev' : '🎬 Media Production'}
                </span>
                <span className={styles.timeline}>{project.timeline}</span>
              </div>

              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              
              <div className={styles.tagsContainer}>
                {project.tags.map((tag, index) => (
                  <span key={index} className={styles.tag}>{tag}</span>
                ))}
              </div>

              {project.links && (
                <div className={styles.linksContainer}>
                  {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noreferrer" className={styles.linkButton}>
                      View Code (GitHub)
                    </a>
                  )}
                  {project.links.itch && (
                    <a href={project.links.itch} target="_blank" rel="noreferrer" className={`${styles.linkButton} ${styles.primaryLink}`}>
                      Play on Itch.io
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
    </section>
  );
}

export default Projects;