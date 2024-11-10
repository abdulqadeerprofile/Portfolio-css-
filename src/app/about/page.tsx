export default function About() {
    return (
      <main className="about-page">
        <section className="about-hero">
          <div className="about-content">
            <h1>About Me</h1>
            <div className="about-grid">
              <div className="about-text">
                <p className="lead">
                  I'm an android developer passionate about creating beautiful, 
                  functional, and user-friendly android applications.
                </p>
                <p>
                  With over 1 year of experience in android development, I specialize 
                  in building modern applications using React native, Expo, and Typescript.
                </p>
              </div>
              <div className="skills-section">
                <h2>Skills</h2>
                <div className="skills-grid">
                  {['React', 'React Native', 'Expo', 'TypeScript', 'Rest API', 'Next JS'].map((skill) => (
                    <div key={skill} className="skill-card">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }