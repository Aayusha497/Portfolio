import { useEffect, useRef } from "react";
import "./Hero.css";

export default function Hero() {
  const titleRef = useRef(null);

  useEffect(() => {
    const letters = titleRef.current?.querySelectorAll(".char");
    letters?.forEach((el, i) => {
      el.style.animationDelay = `${i * 0.06}s`;
    });
  }, []);

  const name = "Aayusha Kandel";

  return (
    <section className="hero">
      {/* Ambient glow orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* Grid overlay */}
      <div className="grid-overlay" />

      <div className="hero-content">
        <p className="hero-eyebrow">
          <span className="dot" />
          Available for work
        </p>

        <h1 className="hero-title" ref={titleRef}>
          {name.split("").map((char, i) => (
            <span key={i} className="char">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        <p className="hero-role">
          <span className="role-badge">Full Stack Developer</span>
        </p>

        <p className="hero-description">
          I build responsive, user-friendly web applications using modern
          technologies. My projects focus on clean design, practical features,
          and real-world problem solving.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a
            href="/resume/Aayusha_KandelCV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            {/* <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {/* <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/> */}
              {/* <polyline points="7,10 12,15 17,10"/>
              <line x1="12" y1="15" x2="12" y2="3"/> */}
            {/* </svg> */} 
            Resume
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-num">4</span>
            <span className="stat-label">Projects Built</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">3+</span>
            <span className="stat-label">Tech Stacks</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">100%</span>
            <span className="stat-label">Passion Driven</span>
          </div>
        </div>
      </div>

      {/* Floating tech tags */}
      <div className="floating-tags">
        {["React", "JavaScript", "Tailwind", "Node.js", "CSS"].map((tag, i) => (
          <span key={tag} className="float-tag" style={{ "--delay": `${i * 0.8}s` }}>
            {tag}
          </span>
        ))}
      </div>

      <div className="scroll-hint">
        <div className="scroll-line" />
        <span>scroll</span>
      </div>
    </section>
  );
}
