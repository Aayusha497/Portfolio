import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:-translate-y-2 transition">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-52 object-cover"
      />

      <div className="p-5">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>

        <p className="text-slate-400 mb-4">{project.shortDescription}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-sm bg-slate-800 text-blue-300 px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <Link
            to={`/project/${project.id}`}
            className="bg-blue-600 px-4 py-2 rounded-lg text-white hover:bg-blue-700"
          >
            View
          </Link>

          <a
            href={project.github}
            target="_blank"
            className="border border-slate-600 px-4 py-2 rounded-lg text-white hover:bg-slate-800"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;