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
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-4 py-20 lg:py-30"
    >
      <Link to="/" className="btn btn-ghost mb-6">
        <ArrowLeft className="mr-2" /> Back to Projects
      </Link>

      <motion.article
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="max-w-4xl mx-auto"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-base-content text-center"
        >
          {project.title}
        </motion.h1>
        <div className="h-px bg-base-content/10 my-8" />

        {project?.images?.length > 0 && project.images[0] && (
          <div className="mb-8 rounded-lg overflow-hidden">
            <figure className="mb-4 w-full flex justify-center">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src={project.images[0]}
                alt={`${project.title} screenshot`}
                className="
                  w-full
                  max-w-md
                  sm:max-w-xl
                  rounded-xl
                  cursor-pointer
                  object-contain
                  shadow-lg
                  hover:shadow-2xl
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
                    px-4 py-2 rounded-full text-sm font-medium
                    bg-[#445c3f]/90
                    text-[#eceee3]
                    backdrop-blur
                    hover:scale-105 transition
                  "
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="h-px bg-base-content/10 my-8" />

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">About This Project</h3>
          <div className="h-px bg-base-content/10 my-8" />

          <p className="text-lg leading-relaxed text-base-content/80 max-w-3xl mx-auto text-justify">
            {project.detailDescription}
          </p>
        </div>

        {project.link !== "#" ? (
          <div className="mb-8">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                px-6 py-3 rounded-lg
                bg-[#445c3f]
                hover:bg-[#7d936c]
                text-white
                transition-all duration-300
                hover:scale-105
                shadow-md hover:shadow-xl
              "
            >
              View Project <MoveRight />
            </a>
          </div>
        ) : null}
      </motion.article>

      {selectedImageIdx !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="modal modal-open"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="modal-box max-w-full sm:max-w-4xl p-4 relative bg-base-100"
          >
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
                <motion.img
                  key={selectedImageIdx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  src={project.images[selectedImageIdx]}
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
          </motion.div>

          <div
            className="modal-backdrop"
            onClick={() => setSelectedImageIdx(null)}
          />
        </motion.div>
      )}
    </motion.div>
  );
}
