import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./Course.css";

function Course() {
  return (
    <section className="courses-section">
      <div className="courses-container">

        <h2 className="courses-title">
          Our <span>Courses</span>
        </h2>

        <div className="course-stack">

          {/* ================= COURSE 1 - UI/UX ================= */}
          <article className="course-card course-card-1">

            <div className="course-info">

              <div className="course-badge">
                01 • DESIGN
              </div>

              <h3>
                UI / UX Design
              </h3>

              <p>
                Master wireframing, Figma prototyping, design systems, and
                user research to build sleek interfaces.
              </p>

              <div className="course-line"></div>

              <div className="course-footer">

                <span>
                  Duration : 12 Weeks
                </span>

                <Link
                  to="/courses/ui-ux-design"
                  className="course-view-details"
                >
                  VIEW DETAILS
                  <ArrowRight size={14} />
                </Link>

              </div>

            </div>

            <div className="course-image">

              <img
                src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1000&q=85"
                alt="UI UX design"
              />

            </div>

          </article>


          {/* ================= COURSE 2 - DIGITAL MARKETING ================= */}
          <article className="course-card course-card-2">

            <div className="course-image">

              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85"
                alt="Digital marketing"
              />

            </div>

            <div className="course-info">

              <div className="course-badge pink-badge">
                02 • MARKETING
              </div>

              <h3>
                Digital Marketing
              </h3>

              <p>
                Performance marketing, SEO, Google Ads, Meta campaigns, and
                growth analytics for brand scaling.
              </p>

              <div className="course-line"></div>

              <div className="course-footer">

                <span>
                  Duration : 12 Weeks
                </span>

                <Link
                  to="/courses/digital-marketing"
                  className="course-view-details"
                >
                  VIEW DETAILS
                  <ArrowRight size={14} />
                </Link>

              </div>

            </div>

          </article>


          {/* ================= COURSE 3 - FULL STACK ================= */}
          <article className="course-card course-card-3">

            <div className="course-info">

              <div className="course-badge blue-badge">
                03 • DEVELOPMENT
              </div>

              <h3>
                Full Stack Web development
              </h3>

              <p>
                Master React, Next.js, Node.js, and MongoDB. Build real-world
                SaaS applications with authentication, databases, and
                deployment pipelines.
              </p>

              <div className="course-line"></div>

              <div className="course-footer">

                <span>
                  Duration : 2 Months
                </span>

                <Link
                  to="/courses/full-stack-development"
                  className="course-view-details"
                >
                  VIEW DETAILS
                  <ArrowRight size={14} />
                </Link>

              </div>

            </div>

            <div className="course-image">

              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1000&q=85"
                alt="Full stack web development"
              />

            </div>

          </article>

        </div>
      </div>
    </section>
  );
}

export default Course;