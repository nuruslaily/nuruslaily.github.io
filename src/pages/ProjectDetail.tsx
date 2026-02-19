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
        <Link to="/" className="btn btn-ghost btn-sm sm:btn-md mb-4">
          <ArrowLeft className="mr-2" size={18} />
          Back
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
    <div className="container mx-auto px-4 py-20 lg:py-30">
      <Link to="/" className="btn btn-ghost mb-6">
        <ArrowLeft className="mr-2" /> Back to Projects
      </Link>

      <article className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          {project.title}
        </h1>

        {project?.images?.length > 0 && project.images[0] && (
          <div className="mb-8 rounded-lg overflow-hidden">
            <figure className="mb-4 w-full flex justify-center">
              <img
                src={project.images[0]}
                alt={`${project.title} screenshot`}
                className="
                  w-full
                  max-w-md
                  sm:max-w-xl
                  rounded-lg
                  cursor-pointer
                  object-contain
                "
                onClick={() => setSelectedImageIdx(0)}
              />
            </figure>
          </div>
        )}

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">Technologies</h3>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="
                  badge
                  badge-md
                  sm:badge-lg
                  bg-[#384C65]
                  text-[#C0C9DB]
                  border-0
                "
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">About This Project</h3>
          <p className="text-lg leading-relaxed text-base-content/80">
            {project.detailDescription}
          </p>
        </div>

        {project.link !== "#" ? (
          <div className="mb-8">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-[#572e54] hover:bg-[#4a2547] text-white"
            >
              View Project <MoveRight />
            </a>
          </div>
        ) : null}
      </article>

      {selectedImageIdx !== null && (
        <div className="modal modal-open">
          <div className="modal-box max-w-full sm:max-w-4xl p-4 relative">
            <button
              className="btn btn-sm btn-circle absolute right-3 top-3 z-10"
              onClick={() => setSelectedImageIdx(null)}
            >
              <X size={18} />
            </button>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                className="btn btn-circle btn-md sm:btn-lg"
                onClick={handlePrevImage}
              >
                <ChevronLeft size={24} />
              </button>

              <div className="flex-1">
                <img
                  src={project.images[selectedImageIdx]}
                  alt={`${project.title} screenshot`}
                  className="
                    max-w-full
                    max-h-[60vh]
                    sm:max-h-[75vh]
                    object-contain
                    rounded-lg
                  "
                />

                <p className="text-center mt-4 text-sm">
                  {selectedImageIdx + 1} / {project.images.length}
                </p>
              </div>

              <button
                className="btn btn-circle btn-md sm:btn-lg"
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
