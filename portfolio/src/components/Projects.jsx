import { useState, useEffect, useRef } from "react";
import "./Projects.css";

const projects = [
  {
    id: "terranova",
    title: "Terranova Real Estate",
    tag: "Real Estate",
    color: "#6c63ff",
    image: "/projects/terranova/terranovahome.png",
    shortDescription: "A modern real estate platform for property discovery and management.",

    description:
      "Terranova is a real estate web application designed to simplify property searching and listing management. Users can browse available properties, view detailed listings, and explore rental or purchase options through a clean and intuitive interface.",

    objective:
      "To create a seamless digital experience for users searching, exploring, and managing real estate properties efficiently.",

    features: [
      "Property listings",
      "Detailed property pages",
      "Search & filtering",
      "Responsive UI",
    ],
    techStack: ["Next.js", "React", "JavaScript", "CSS"],
    github: "https://github.com/Aayusha497/Terranova-real-estate",
    live: "",
  },
  {
    id: "pawwell",
    title: "PawWell",
    tag: "Pet Wellness",
    color: "#00d4ff",
    image: "/projects/pawwell/pawwellhome.png",
    shortDescription: "A pet wellness and care management platform.",

    description:
      "PawWell is a platform dedicated to pet health and wellness. Pet owners can track health records, explore veterinary services, and access essential pet care resources through a centralized system.",

    objective:
      "To provide pet owners with a reliable and user-friendly platform for managing their pets’ health, wellness, and daily care needs.",

    features: [
      "Booking appointments for different services",
      "Pet health records",
      "Service listings",
      "Emergency Services",
      "Daily Activity log",
      "Responsive design",
    ],
    techStack: ["React", "Express.js", "Node.js", "PostgreSQL"],
    github: "https://github.com/Aayusha497/PawWell-Care-Center",
    live: "",
  },
  {
    id: "dearly",
    title: "Dearly",
    tag: "Memorial",
    color: "#ff6bcb",
    image: "/projects/dearly/dearlyhome.png",
    shortDescription: "A digital journaling platform for personal reflection and self-expression.",

    description:
      "Dearly is a journal application built to help users record thoughts, memories, and daily experiences in a secure and organized way. The platform provides a clean and calming interface that encourages regular journaling and self-reflection.",

    objective:
      "To create a safe and user-friendly digital space where users can express themselves, organize thoughts, and build a consistent journaling habit.",

    features: [
      "Create journal entries",
      "Organized note management",
      "Clean user interface",
      "Responsive design",
    ],
    techStack: [".Net MAUI Blazor Hubrid", "SQLite"],
    github: "https://github.com/Aayusha497/Dearly",
    live: "",
  },
  {
    id: "vpms",
    title: "VPMS",
    tag: "Management",
    color: "#a0ff6b",
    image: "/projects/vpms/vpmshome.png",
    shortDescription: "A smart inventory management system for vehicle parts and stock control.",

    description:
      "VPMS is a vehicle parts management system designed to streamline inventory operations for automotive businesses. The system helps manage vehicle parts, track stock availability, monitor transactions, and maintain accurate records for efficient business operations.",

    objective:
      "To provide an organized and efficient solution for managing vehicle parts inventory, improving stock visibility, and reducing manual record-keeping errors.",

    features: [
      "Parts inventory management",
      "Stock tracking",
      "Transaction records",
      "Admin, Staff and Customer dashboards",
    ],
    techStack: [".NET 8", "ASP.NET Core Web API", "Entity Framework Core", "SQL Server"],
    github: "https://github.com/NamrataKarki9/vpms",
    live: "",
  },
];

function ProjectCard({ project, onClick, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          cardRef.current.style.opacity = "1";
          cardRef.current.style.transform = "translateY(0)";
        }
      },
      { threshold: 0.15 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="project-card"
      style={{
        opacity: 0,
        transform: "translateY(40px)",
        transition: `opacity 0.6s ease ${index * 0.12}s, transform 0.6s ease ${index * 0.12}s`,
        "--accent": project.color,
      }}
    >
      <div className="card-image-wrap">
        <img
          src={project.image}
          alt={project.title}
          className="card-image"
          onError={(e) => {
            e.target.style.display = "none";
            e.target.nextSibling.style.display = "flex";
          }}
        />
        <div className="card-image-fallback">
          <span>{project.title[0]}</span>
        </div>
        <div className="card-overlay">
          <span className="card-tag">{project.tag}</span>
        </div>
      </div>

      <div className="card-body">
        <h3 className="card-title">{project.title}</h3>
        <p className="card-desc">{project.shortDescription}</p>

        <div className="card-tech">
          {project.techStack.map((t) => (
            <span key={t} className="tech-pill">{t}</span>
          ))}
        </div>

        <button className="card-btn" onClick={() => onClick(project)}>
          View Project
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

function ProjectPage({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handler = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handler);
    };
  }, [onClose]);

  return (
    <div className="fullpage-overlay" style={{ "--accent": project.color }}>
      {/* Ambient orb matching project color */}
      <div className="fp-orb" />

      {/* Top bar */}
      <div className="fp-topbar">
        <button className="fp-back" onClick={onClose}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Projects
        </button>
        <span className="fp-tag">{project.tag}</span>
      </div>

      {/* Scrollable content */}
      <div className="fp-scroll">
        <div className="fp-inner">

          {/* Hero image */}
          <div className="fp-hero-img">
            <img
              src={project.image}
              alt={project.title}
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
            <div className="fp-img-fallback">
              <span>{project.title[0]}</span>
            </div>
            <div className="fp-img-shine" />
          </div>

          {/* Title */}
          <div className="fp-title-row">
            <h1 className="fp-title">{project.title}</h1>
            <div className="fp-actions">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="fp-btn-outline">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                  GitHub
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="fp-btn-primary">
                  Live Demo
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Two column layout */}
          <div className="fp-grid">
            {/* Left column */}
            <div className="fp-left">
              <div className="fp-section">
                <h3 className="fp-section-label">About</h3>
                <p className="fp-section-text">{project.description}</p>
              </div>
              <div className="fp-section">
                <h3 className="fp-section-label">Objective</h3>
                <p className="fp-section-text">{project.objective}</p>
              </div>
            </div>

            {/* Right column */}
            <div className="fp-right">
              <div className="fp-section">
                <h3 className="fp-section-label">Features</h3>
                <ul className="fp-features">
                  {project.features.map((f, i) => (
                    <li key={f} style={{ animationDelay: `${i * 0.08}s` }}>
                      <span className="fp-dot" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="fp-section">
                <h3 className="fp-section-label">Tech Stack</h3>
                <div className="fp-tech">
                  {project.techStack.map((t) => (
                    <span key={t} className="fp-tech-pill">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          headingRef.current.classList.add("visible");
        }
      },
      { threshold: 0.3 }
    );
    if (headingRef.current) observer.observe(headingRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-inner">
        <div className="section-heading" ref={headingRef}>
          <span className="section-eyebrow">My Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of real-world projects I've designed and built from scratch.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={setSelected}
              index={i}
            />
          ))}
        </div>
      </div>

      {selected && (
        <ProjectPage project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}