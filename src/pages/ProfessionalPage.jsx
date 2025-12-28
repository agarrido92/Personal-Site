import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/professional.css";
import logoLight from "../assets/logo-light.png";
import logoDark from "../assets/logo-dark.png";
import {Target, Lightbulb, Handshake, Zap, Linkedin, Github, Mail, Sun, Moon} from "lucide-react";

function getInitialTheme() {
  if (typeof window === "undefined") return "light";

  const saved = localStorage.getItem("pro-theme");
  if (saved === "light" || saved === "dark") return saved;

  const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
  return prefersDark ? "dark" : "light";
}

export default function ProfessionalPage() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    localStorage.setItem("pro-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  const logo = theme === "dark" ? logoDark : logoLight;


  return(
    <div className="pro-page" data-theme={theme}>
      <div className="pro-surface">
        <header className="pro-header">
          <div className="pro-header-inner">
            <div className="pro-brand">
              <Link to="/professional" className="pro-brand-link">
                <img src={logo} alt="Andrea Garrido logo" className="pro-brand-logo" />
              </Link>
            </div>

            <nav className="pro-nav" aria-label="Primary">
              <Link className="pro-nav-link pro-nav-link--no-caret" to="/professional">Home</Link>

              <div className="pro-dropdown" tabIndex={0}>
                <span className="pro-nav-link pro-nav-link-button" aria-haspopup="true">
                  About Me
                  <span className="pro-caret" aria-hidden="true">▾</span>
                </span>
                <div className="pro-dropdown-menu" role="menu" aria-label="About Me menu">
                  <a className="pro-dropdown-item" href="#education" role="menuitem">Education</a>
                  <a className="pro-dropdown-item" href="#interests" role="menuitem">Interests</a>
                  <a className="pro-dropdown-item" href="#goals" role="menuitem">Goals</a>
                </div>
              </div>

              <div className="pro-dropdown" tabIndex={0}>
                <span className="pro-nav-link pro-nav-link-button" aria-haspopup="true">
                  Experience
                  <span className="pro-caret" aria-hidden="true">▾</span>
                </span>
                <div className="pro-dropdown-menu" role="menu" aria-label="Experience menu">
                  <a className="pro-dropdown-item" href="#work" role="menuitem">
                    Work
                  </a>
                  <a className="pro-dropdown-item" href="#projects" role="menuitem">
                    Projects
                  </a>
                </div>
              </div>
              <a className="pro-nav-link pro-nav-link--no-caret" href="#contact">Contact</a>
              <button type="button" className="pro-theme-toggle" onClick={toggleTheme} aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"} title={theme === "dark" ? "Light Mode" : "Dark Mode"}>
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            </nav>
            
          </div>
        </header>

        <main className="pro-main" id="home">
          <section className="pro-hero">
            <div className="pro-hero-inner">
              <h1 className="pro-hero-title">Practical Solutions, Human Focused</h1>
              <p className="pro-hero-desc">
                Ten years in IT has made one thing clear: Understanding the people and 
                problem behind the code is just as important as the code itself.
              </p>
              <div className="pro-hero-actions">
                <a className="pro-btn pro-btn-primary" href="#projects">
                  View My Work
                </a>
                <a className="pro-btn pro-btn-ghost" href="#contact">
                  Get in Touch
                </a>
              </div>
            </div>
          </section>

          <section className="pro-beyond" aria-label="More Than Just Code">
            <div className="pro-beyond-inner">
              <h2 className="pro-section-title">More Than Just Code</h2>
              <p className="pro-section-desc">
                Success means focusing on people and big-picture challenges as much as technical details—so the work
                stays useful, maintainable, and worth building. 
              </p>
              <div className="pro-points">
                <div className="pro-point">
                  <div className="pro-point-icon" aria-hidden="true">
                    <Target size={18} strokeWidth={1.75} />
                  </div>
                  <div className="pro-point-text">
                    10+ years solving real business challenges in a fast-paced industry.
                  </div>
                </div>

                <div className="pro-point">
                  <div className="pro-point-icon" aria-hidden="true">
                    <Lightbulb size={18} strokeWidth={1.75} />
                  </div>
                  <div className="pro-point-text">
                    Trusted to streamline complex issues into clear, effective solutions.
                  </div>
                </div>

                <div className="pro-point">
                  <div className="pro-point-icon" aria-hidden="true">
                    <Handshake size={18} strokeWidth={1.75} />
                  </div>
                  <div className="pro-point-text">
                    Proven ability to unite and lead teams to achieve high-impact goals.
                  </div>
                </div>

                <div className="pro-point">
                  <div className="pro-point-icon" aria-hidden="true">
                    <Zap size={18} strokeWidth={1.75} />
                  </div>
                  <div className="pro-point-text">
                    Swiftly adapts and thrives in fast-paced and evolving environments.
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="pro-connect" id="contact" aria-label="Contact">
            <h2 className="pro-connect-title">Let’s connect</h2>
            <div className="pro-connect-links">
              <a className="pro-connect-link" href="https://www.linkedin.com/in/andrea-garrido-menacho-2434165b" target="_blank" rel="noreferrer">
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a className="pro-connect-link" href="https://www.github.com/agarrido92" target="_blank" rel="noreferrer">
                <Github size={16} />
                GitHub
              </a>
              <a className="pro-connect-link" href="mailto:agarrido92@gmail.com">
                <Mail size={16} />
                Email
              </a>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}