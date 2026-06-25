import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";

function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((item) => item.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        Project not found.
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <Link to="/" className="text-blue-400 hover:underline">
          ← Back to Home
        </Link>

        <h1 className="text-4xl font-bold mt-8 mb-6">{project.title}</h1>

        <img
          src={project.image}
          alt={project.title}
          className="w-full rounded-xl border border-slate-800 mb-8"
        />

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-3">Description</h2>
          <p className="text-slate-400">{project.description}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-3">Objective</h2>
          <p className="text-slate-400">{project.objective}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-3">Features</h2>
          <ul className="list-disc list-inside text-slate-400">
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-3">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="bg-slate-800 text-blue-300 px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <a
          href={project.github}
          target="_blank"
          className="inline-block bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          View GitHub Repository
        </a>
      </div>
    </main>
  );
}

export default ProjectDetails;