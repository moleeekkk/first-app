import "./Contact.css";

export function Contact() {
  return (
    <>
      <section class="contact">
        <div class="section-title">
          <h2>Contact Us</h2>
          <p>
            Have a question or want to work together? We'd love to hear from
            you. Fill out the form below and we'll get back to you soon.
          </p>
        </div>

        <div class="contact-container">
          <div class="contact-info">
            <div class="info-box">
              <h3>📍 Address</h3>
              <p>Ahmedabad, Gujarat, India</p>
            </div>

            <div class="info-box">
              <h3>📞 Phone</h3>
              <p>+91 98765 43210</p>
            </div>

            <div class="info-box">
              <h3>📧 Email</h3>
              <p>example@email.com</p>
            </div>

            <div class="info-box">
              <h3>🌐 Website</h3>
              <p>www.yourwebsite.com</p>
            </div>
          </div>

          <div class="contact-form">
            <form>
              <input type="text" placeholder="Full Name" required />

              <input type="email" placeholder="Email Address" required />

              <input type="text" placeholder="Subject" required />

              <textarea rows="6" placeholder="Your Message" required></textarea>

              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
