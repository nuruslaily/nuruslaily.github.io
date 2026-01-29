import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  MoveRight,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { useState } from "react";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === parseInt(id || ""));
  const [selectedImageIdx, setSelectedImageIdx] = useState<number | null>(null);

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold">Project not found</h2>
        <Link to="/projects" className="btn btn-[#572e54] mt-4">
          Back to Projects
        </Link>
      </div>
    );
  }

  const handlePrevImage = () => {
    if (selectedImageIdx !== null) {
      setSelectedImageIdx((prev) =>
        prev === 0 ? project.images.length - 1 : prev! - 1,
      );
    }
  };

  const handleNextImage = () => {
    if (selectedImageIdx !== null) {
      setSelectedImageIdx((prev) =>
        prev === project.images.length - 1 ? 0 : prev! + 1,
      );
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <Link to="/projects" className="btn btn-ghost mb-6">
        <ArrowLeft className="mr-2" /> Back to Projects
      </Link>

      <article className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">{project.title}</h1>

        {/* Project Images Gallery */}
        <div className="mb-8 rounded-lg overflow-hidden">
          <figure className="mb-4 w-full flex justify-center">
            <img
              src={project.images[0]}
              alt={`${project.title} screenshot`}
              className="w-80 items-center rounded-lg cursor-pointer"
              onClick={() => setSelectedImageIdx(0)}
            />
          </figure>
        </div>

        {/* Technologies */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">Technologies</h3>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, idx) => (
              <span key={idx} className="badge badge-lg badge-[#572e54]">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Detailed Description */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">About This Project</h3>
          <p className="text-lg leading-relaxed text-base-content/80">
            {project.detailDescription}
          </p>
        </div>

        {/* External Link (if available) */}
        {project.link !== "#" ? (
          <div className="mb-8">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-[#572e54]"
            >
              View Project <MoveRight />
            </a>
          </div>
        ) : null}
      </article>

      {/* Image Modal */}
      {selectedImageIdx !== null && (
        <div className="modal modal-open">
          <div className="modal-box max-w-4xl relative">
            <button
              className="btn btn-sm btn-circle absolute right-2 top-2"
              onClick={() => setSelectedImageIdx(null)}
            >
              <X size={20} />
            </button>

            <div className="flex items-center justify-center gap-4">
              <button
                className="btn btn-circle btn-lg"
                onClick={handlePrevImage}
              >
                <ChevronLeft size={24} />
              </button>

              <div className="flex-1">
                <img
                  src={project.images[selectedImageIdx]}
                  alt={`${project.title} screenshot ${selectedImageIdx + 1}`}
                  className="max-w-full rounded-lg"
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                />
                <p className="text-center mt-4 text-sm">
                  {selectedImageIdx + 1} / {project.images.length}
                </p>
              </div>

              <button
                className="btn btn-circle btn-lg"
                onClick={handleNextImage}
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div
            className="modal-backdrop"
            onClick={() => setSelectedImageIdx(null)}
          />
        </div>
      )}
    </div>
  );
}
