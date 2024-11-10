export default function Contact() {
    return (
      <main className="contact-page">
        <section className="contact-hero">
          <div className="contact-content">
            <h1>Get in Touch</h1>
            <p className="contact-lead">
              Have a project in mind? Let's work together to bring your ideas to life.
            </p>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
            <div className="contact-info">
              <div className="contact-item">
                <h3>Email</h3>
                <p>abdulqadeerprofile@gmail.com</p>
              </div>
              <div className="contact-item">
                <h3>Location</h3>
                <p>Karachi, Pakistan</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }