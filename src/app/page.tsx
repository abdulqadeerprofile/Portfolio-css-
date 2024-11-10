export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <h1 className="glitch" data-text="Abdul Qadeer">Abdul Qadeer</h1>
          <p className="subtitle">React Native Developer</p>
          <div className="hero-cta">
            <a href="#projects" className="cta-button">View My Work</a>
            <a href="/contact" className="cta-button secondary">Get in Touch</a>
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <h2>Featured Projects</h2>
        <div className="project-grid">
          {[1, 2, 3].map((num) => (
            <div key={num} className="project-card">
              <div className="project-image">
                <img src={`/1.webp`} alt={`Project ${num}`} />
              </div>
              <div className="project-info">
                <h3>Project {num}</h3>
                <p>A modern android application built with React Native</p>
                <div className="project-tags">
                  <span>React Native</span>
                  <span>Expo</span>
                  <span>TypeScript</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">View Project</a>
                  <a href="#" className="project-link">Source Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}