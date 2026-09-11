import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Navbar from "../components/Navbar";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact form submitted:", formData);

    alert("Thank you! Your message has been submitted.");

    setFormData({
      name: "",
      email: "",
      phone: "",
      role: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">

      {/* ================= NAVBAR ================= */}

      <Navbar />


      {/* ================= HERO ================= */}

      <main>

        <section className="contact-hero">

          <div className="contact-hero-pill">
            <span></span>
            WE ARE HERE TO HELP
          </div>

          <h1>
            Lets Build your,
            <br />
            <span>Growth Journey Together.</span>
          </h1>

          <p>
            Have questions about the Digital Marketing Masterclass,
            corporate training, or hiring our graduates? Reach out to
            our admissions and support teams.
          </p>

        </section>


        {/* ================= CONTACT AREA ================= */}

        <section className="contact-section">

          <div className="contact-container">


            {/* ================= OFFICE CARD ================= */}

            <div className="office-card">

              <div className="office-badge">
                OUR OFFICE ADDRESS
              </div>

              <h2>
                Visit Our Office
              </h2>

              <p className="office-address">
                Address : 142, 2nd Floor, Kamaraj Salai,
                Puducherry, 605013
              </p>

              <div className="office-divider"></div>


              <div className="office-contact">

                <div className="office-contact-item">

                  <Phone size={19} />

                  <a href="tel:+918870397432">
                    +91 88703 97432
                  </a>

                </div>


                <div className="office-contact-item">

                  <Mail size={20} />

                  <a href="mailto:info@dementee.in">
                    info@dementee.in
                  </a>

                </div>

              </div>

            </div>


            {/* ================= FORM CARD ================= */}

            <div className="contact-form-card">

              <h2>
                Send us a message
              </h2>

              <form onSubmit={handleSubmit}>


                {/* NAME + EMAIL */}

                <div className="form-row">

                  <div className="form-group">

                    <label htmlFor="name">
                      Full Name
                    </label>

                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name"
                      required
                    />

                  </div>


                  <div className="form-group">

                    <label htmlFor="email">
                      Email Address
                    </label>

                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      required
                    />

                  </div>

                </div>


                {/* PHONE + ROLE */}

                <div className="form-row">

                  <div className="form-group">

                    <label htmlFor="phone">
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      required
                    />

                  </div>


                  <div className="form-group">

                    <label htmlFor="role">
                      Current Role
                    </label>

                    <input
                      id="role"
                      type="text"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      placeholder="Student / Business owner / Professional"
                    />

                  </div>

                </div>


                {/* MESSAGE */}

                <div className="form-group message-group">

                  <label htmlFor="message">
                    Your Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us your message"
                    rows="5"
                    required
                  />

                </div>


                {/* SUBMIT */}

                <button
                  type="submit"
                  className="contact-submit-btn"
                >
                  SUBMIT
                </button>

              </form>

            </div>

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <footer className="contact-footer">

        <div className="contact-footer-container">


          <div className="contact-footer-top">


            {/* BRAND / ADDRESS */}

            <div className="contact-footer-brand">

              <div className="contact-footer-logo">

                <div className="contact-footer-logo-mark">
                  ✦
                </div>

                <div className="contact-footer-logo-text">

                  <strong>
                    De mentee
                  </strong>

                  <span>
                    Technologies
                  </span>

                </div>

              </div>


              <h3>
                ADDRESS
              </h3>

              <p>
                Address : 142, 2nd Floor,
                Kamaraj Salai, Puducherry,
                <br />
                605013
              </p>

              <p>
                Phone: +91 88703 97432
              </p>

              <p>
                info@dementee.in
              </p>

            </div>


            {/* EXPLORE */}

            <div className="contact-footer-column">

              <h3>
                EXPLORE
              </h3>

              <a href="/">
                Home
              </a>

              <a href="/#success">
                Success story
              </a>

              <a href="/#blog">
                Blog
              </a>

              <a href="/about">
                About us
              </a>

              <a href="/contact">
                Contact us
              </a>

            </div>


            {/* COURSES */}

            <div className="contact-footer-column">

              <h3>
                OUR COURSES
              </h3>

              <a href="/courses/ui-ux-design">
                UI / UX Designer
              </a>

              <a href="/courses/digital-marketing">
                Digital marketing
              </a>

              <a href="/courses/full-stack-development">
                Web Development
              </a>

            </div>


            {/* INFORMATION */}

            <div className="contact-footer-column contact-information">

              <a
                href="#contact"
                className="contact-footer-enroll"
              >
                Enroll Today
              </a>

              <h3>
                INFORMATION
              </h3>

              <a href="#privacy">
                Privacy policy
              </a>

              <a href="#terms">
                Terms & Conditions
              </a>

            </div>

          </div>


          <div className="contact-footer-divider"></div>


          <div className="contact-footer-bottom">

            © 2024 De Mentee Academy. All Rights Reserved

          </div>

        </div>

      </footer>

    </div>
  );
}

export default Contact;