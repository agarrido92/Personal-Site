import React from "react";
import {Target, Lightbulb, Handshake, Zap} from "lucide-react";

export default function ProfessionalHome() {
  return(
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
    </main>
  );
}