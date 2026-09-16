import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import "./Blog.css";
import footerlogo from "../assets/footerlogo.png";
import Footer from "./Footer";

function Blog() {
  const articles = [
    {
      image:
        "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=900&q=85",
      title: "Types of Digital Marketing",
      date: "June 22, 2026",
    },
    {
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85",
      title:
        "Digital Marketing for Beginners: Learn, Grow, Succeed",
      date: "June 18, 2026",
    },
    {
      image:
        "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=900&q=85",
      title:
        "Digital Marketing Overview: Types, Required Skills",
      date: "Feb 22, 2024",
    },
    {
      image:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=900&q=85",
      title:
        "Leading UI and UX Design Course Institute in Pondicherry",
      date: "July 26, 2024",
    },
    {
      image:
        "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=900&q=85",
      title:
        "The Difference Between UX and UI Design: A Beginner's Guide",
      date: "Feb 27, 2024",
    },
    {
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85",
      title: "Best Digital Marketing Strategy Framework",
      date: "July 14, 2026",
    },
  ];

  return (
    <div className="blog-page">

      {/* ================= NAVBAR ================= */}

      <Navbar />


      {/* ================= MAIN ================= */}

      <main>

        {/* ================= HERO ================= */}

        <section className="blog-hero">

          <div className="blog-hero-pill">
            <span></span>
            BLOGS
          </div>

          <h1>
            Learn. Grow.{" "}
            <span>Stay Ahead.</span>
          </h1>

          <p>
            Discover practical guides, industry trends, SEO strategies,
            social media tips, AI tools, and career advice written by
            experts to help you become a confident digital marketer.
          </p>

        </section>


        {/* ================= FEATURED ARTICLE ================= */}

        <section className="featured-section">

          <div className="featured-card">

            <div className="featured-content">

              <div className="featured-meta">

                <span className="featured-badge">
                  FEATURED ARTICLE
                </span>

                <span className="featured-date">
                  July 14, 2026
                </span>

              </div>


              <h2>
                Best Digital Marketing Strategy
                <br />
                Framework
              </h2>


              <p>
                No More Random Acts of Marketing: The Ultimate
                Digital Marketing Strategy Framework
              </p>


              <div className="featured-bottom">

                <div className="featured-author">

                  <div className="author-avatar">
                  </div>

                  <strong>
                    Admin
                  </strong>

                </div>


                <a
                  href="#articles"
                  className="featured-read-btn"
                >
                  Read Full Article
                  <ArrowRight size={17} />
                </a>

              </div>

            </div>


            <div className="featured-image">

              <img
                src="https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=1000&q=85"
                alt="Digital marketing strategy"
              />

            </div>

          </div>

        </section>


        {/* ================= LATEST ARTICLES ================= */}

        <section
          className="latest-section"
          id="articles"
        >

          <div className="latest-container">

            <h2 className="latest-title">
              Latest articles :
            </h2>


            <div className="article-grid">

              {articles.map((article, index) => (

                <article
                  className="article-card"
                  key={index}
                >

                  <div className="article-image">

                    <img
                      src={article.image}
                      alt={article.title}
                    />

                  </div>


                  <div className="article-content">

                    <h3>
                      {article.title}
                    </h3>


                    <div className="article-footer">

                      <span>
                        {article.date}
                      </span>

                      <a href="#article">
                        Read Post
                        <ArrowRight size={14} />
                      </a>

                    </div>

                  </div>

                </article>

              ))}

            </div>

          </div>

        </section>

      </main>

<Footer />

    </div>
  );
}

export default Blog;