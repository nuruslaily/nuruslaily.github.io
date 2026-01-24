import { MoveRight } from "lucide-react";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <div key={project.id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="card-body">
              <h3 className="card-title">{project.title}</h3>
              <p>{project.description}</p>
              <div className="flex flex-wrap gap-2 my-2">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="badge badge-primary">{tech}</span>
                ))}
              </div>
              <div className="card-actions justify-start">
                <a href={project.link} className="btn btn-primary btn-sm">View Project <MoveRight /></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
