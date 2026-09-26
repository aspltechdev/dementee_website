import { useEffect, useState } from "react";
import "./EnrollmentModal.css";

const COURSE_OPTIONS = [
  "UI / UX Design",
  "Digital Marketing",
  "Full Stack Development",
];

function EnrollmentModal({ open, onClose, courseName }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    course: courseName || COURSE_OPTIONS[0],
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) return;

    setForm((current) => ({
      ...current,
      course: courseName || current.course || COURSE_OPTIONS[0],
    }));
    setSubmitted(false);

    const handleEscape = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscape);
    document.body.classList.add("enrollment-modal-open");

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.classList.remove("enrollment-modal-open");
    };
  }, [open, courseName, onClose]);

  if (!open) return null;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="enrollment-modal-overlay"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className="enrollment-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="enrollment-modal-title"
      >
        <button
          type="button"
          className="enrollment-modal-close"
          onClick={onClose}
          aria-label="Close enrollment form"
        >
          ×
        </button>

        <div className="enrollment-security-note">
          <span aria-hidden="true">🔒</span>
          Your information will never be shared with any third party
        </div>

        {submitted ? (
          <div className="enrollment-success">
            <div className="enrollment-success-icon">✓</div>
            <h2 id="enrollment-modal-title">Thank you for your interest!</h2>
            <p>
              Your enrollment request for <strong>{form.course}</strong> has
              been received. Our team will contact you soon.
            </p>
            <button
              type="button"
              className="enrollment-submit"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        ) : (
          <form className="enrollment-form" onSubmit={handleSubmit}>
            <h2 id="enrollment-modal-title">Enroll Now</h2>
            <p className="enrollment-form-intro">
              Fill in your details and our team will get in touch with you.
            </p>

            <div className="enrollment-field">
              <label>
                Name <span>*</span>
              </label>
              <div className="enrollment-name-grid">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                  />
                  <small>First</small>
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    required
                  />
                  <small>Last</small>
                </div>
              </div>
            </div>

            <div className="enrollment-field">
              <label htmlFor="enrollment-email">
                Email <span>*</span>
              </label>
              <input
                id="enrollment-email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="enrollment-field">
              <label htmlFor="enrollment-phone">
                Phone Number <span>*</span>
              </label>
              <input
                id="enrollment-phone"
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="enrollment-field">
              <label htmlFor="enrollment-course">
                Select Course <span>*</span>
              </label>
              <select
                id="enrollment-course"
                name="course"
                value={form.course}
                onChange={handleChange}
                required
              >
                {COURSE_OPTIONS.map((course) => (
                  <option key={course} value={course}>
                    {course}
                  </option>
                ))}
              </select>
            </div>

            <div className="enrollment-field">
              <label htmlFor="enrollment-message">
                Please drop your message <span>*</span>
              </label>
              <textarea
                id="enrollment-message"
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="enrollment-submit">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default EnrollmentModal;
