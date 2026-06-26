import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="app">
      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <span className="nav-logo">AK</span>

        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

          {/* <a
            href="/resume/Aayusha_KandelCV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-resume-btn"
          >
            Resume
          </a> */}
        </div>
      </nav>

      <Hero />
      <Projects />
      <Footer />
    </div>
  );
}