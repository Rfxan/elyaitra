"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Countdown logic
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 21);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      if (distance < 0) {
        ["days", "hours", "minutes", "seconds"].forEach(
          (id) => ((document.getElementById(id)!.textContent = "0"))
        );
        clearInterval(timer);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("days")!.textContent = String(days);
      document.getElementById("hours")!.textContent = String(hours).padStart(2, "0");
      document.getElementById("minutes")!.textContent = String(minutes).padStart(2, "0");
      document.getElementById("seconds")!.textContent = String(seconds).padStart(2, "0");
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Background Elements */}
      <div className="background-elements">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      {/* Navigation */}
      <nav>
        <div className="logo-container">
          <img src="/image.PNG" alt="elyAItra Logo" />
          <span className="brand-name"></span>
        </div>
        <ul className="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#help">Help</a></li>
        </ul>
        <button className="cta-btn">Get Started</button>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            AI Learning Made <span>Simple & Smart</span>
          </h1>
          <p>
            elyAItra is revolutionizing education for students everywhere.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Start Your Journey</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-image">
          <img src="/image.PNG" alt="elyAItra Hero" />
        </div>
      </section>

      {/* Countdown Section */}
      <section className="countdown-section">
        <h2>
          Launching In <span>...</span>
        </h2>
        <div className="countdown">
          {["Days", "Hours", "Minutes", "Seconds"].map((label) => (
            <div className="countdown-box" key={label}>
              <div
                className="countdown-number"
                id={label.toLowerCase()}
              >
                00
              </div>
              <div className="countdown-label">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="features" id="features">
        <div className="section-title">
          <h2>
            Why Choose <span>elyAItra?</span>
          </h2>
          <p>Empowering students with intelligent learning solutions</p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🤖</div>
            <h3>AI-Powered Learning</h3>
            <p>Personalized AI learning paths.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Lightning Fast</h3>
            <p>Instant answers and feedback.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 elyAItra. All rights reserved.</p>
        <p>Making the future easier for students worldwide.</p>
        <p>Contact: hello@elyaitra.com</p>
      </footer>
    </>
  );
}
