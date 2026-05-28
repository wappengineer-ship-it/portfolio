import React from 'react';
import styles from './Projects.module.css';

function Projects(){
  const projectList = [
    {
      id: 1,
      category: 'production',
      title: 'Enterprise Logic Engine & Server Management',
      timeline: '5 Years Professional Experience',
      description: 'Maintained and optimized custom screen-based software systems running on pure Vanilla JavaScript. Responsible for backend reverse-engineering across Node.js, VB.net, and MS SQL Server environments, alongside managing nightly data backups for SQL relational databases. Produced official system media showcasing core functional modules including xAccounting, xPay payroll configurations, and our proprietary xTool code automation engine.',
      tags: ['Vanilla JS', 'Node.js', 'VB.net', 'SQL', 'Server Maintenance'],
      links: {
        youtube: 'https://youtube.com/@mirrorbusinesssolutions?si=5y3O4hRzQ-TSuGnx',
        buttonText: 'Watch System Demos' // Custom button text
      }
    },
    {
      id: 2,
      category: 'production',
      title: 'React To-Do App',
      timeline: 'Frontend Practice',
      description: 'A clean, responsive task management application built to master state management, component lifecycles, and interactive user interfaces in React. Features real-time task filtering and persistent local storage synchronization to ensure data stays intact across browser sessions.',
      tags: ['React', 'JavaScript', 'Local Storage', 'CSS Modules'],
      links: {
        github: 'https://github.com', // Add your link when ready!
        vercel: 'https://vercel.com'  // Add your link when ready!
      }
    },
    {
      id: 3,
      category: 'game',
      title: 'Rectify: Vanilla JS Canvas RPG Engine',
      timeline: 'Hand-Coded Milestone',
      description: 'A retro side-scrolling survival RPG built completely by hand using pure JavaScript and HTML5 Canvas. Features procedural shifting terrain algorithms, a coordinate-tracking event trigger matrix, persistent local storage data saving, and time-differential real-time banking calculations.',
      tags: ['Vanilla JS', 'HTML5 Canvas', 'Game Loop', 'Local Storage'],
      links: {
        github: 'https://github.com/wappengineer-ship-it/rectify-old', 
        itch: 'https://wappengineer.itch.io/rectify-original' 
      }
    },
    {
      id: 4,
      category: 'game',
      title: "David: King's Ascension",
      timeline: 'Modern Prototyping',
      description: 'A mobile-friendly 2D top-down retro RPG exploring mechanics architecture through an efficient, AI-assisted development workflow. Implemented precise custom character sprite animations, complex coordinate collision logic, physical map boundaries, and an optimized virtual joystick interface for touch screens.',
      tags: ['HTML5', 'JavaScript', 'AI Workflows', 'Mobile Responsive'],
      links: {
        itch: 'https://itch.io'
      }
    },
    {
      id: 5,
      category: 'media',
      title: 'Technical Documentation & Product Media',
      timeline: 'Product Communications',
      description: 'Produced comprehensive visual guides, software walkthroughs, and promotional video media for complex production applications. Bridged the gap between engineering and user experience by translating deep backend mechanics into accessible interactive materials.',
      tags: ['Video Production', 'Technical Writing', 'Product Demos', 'UX/UI Training'],
      links: {
        youtube: 'https://youtube.com/@mirrorbusinesssolutions?si=5y3O4hRzQ-TSuGnx',
        buttonText: 'View Video Channel' // Custom button text
      }
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
                  {project.links.vercel && (
                    <a href={project.links.vercel} target="_blank" rel="noreferrer" className={`${styles.linkButton} ${styles.primaryLink}`}>
                      Live Demo (Vercel)
                    </a>
                  )}
                  {project.links.itch && (
                    <a href={project.links.itch} target="_blank" rel="noreferrer" className={`${styles.linkButton} ${styles.primaryLink}`}>
                      Play on Itch.io
                    </a>
                  )}
                  {/* Dynamic YouTube Button with smart text replacement */}
                  {project.links.youtube && (
                    <a href={project.links.youtube} target="_blank" rel="noreferrer" className={`${styles.linkButton} ${styles.primaryLink}`}>
                      {project.links.buttonText || 'Watch on YouTube'}
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