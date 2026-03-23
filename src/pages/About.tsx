import { useState } from "react";
import { aboutData } from "../data/about";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function About() {
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = aboutData.images;

  const handlePrevImage = () => {
    if (selectedImageIdx !== null) {
      setSelectedImageIdx((prev) =>
        prev === 0 ? images.length - 1 : prev! - 1,
      );
    }
  };

  const handleNextImage = () => {
    if (selectedImageIdx !== null) {
      setSelectedImageIdx((prev) =>
        prev === images.length - 1 ? 0 : prev! + 1,
      );
    }
  };

  return (
    <div className="container mx-auto px-4 py-30">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg text-base-content/80 max-w-2xl mx-auto">
          I'm a dedicated developer with a passion for creating elegant
          solutions to complex problems. With experience in modern web
          technologies, I strive to build applications that are not only
          functional but also delightful to use.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative flex flex-col items-center">
          {images?.length > 0 && (
            <img
              src={images[selectedImageIdx]}
              className=" w-90 max-h-60 rounded-2xl shadow-xl cursor-pointer object-top object-cover"
              onClick={() => setIsModalOpen(true)}
            />
          )}
          <div
            className="
              absolute
              -inset-6
              bg-linear-to-br
              from-[#485F88]
              to-[#121524]
              rounded-2xl
              blur-2xl
              opacity-30
              -z-10
            "
          />

          {images?.length > 1 && (
            <div className="flex gap-4 mt-6">
              <button
                onClick={handlePrevImage}
                className="btn btn-sm bg-[#121524] hover:bg-[#180018] text-[#C0C9DB]"
              >
                Prev
              </button>
              <button
                onClick={handleNextImage}
                className="btn btn-sm bg-[#121524] hover:bg-[#180018] text-[#C0C9DB]"
              >
                Next
              </button>
            </div>
          )}
        </div>

        <div
          className="
            flex gap-4
            overflow-x-auto
            pb-4
            snap-x snap-mandatory
            no-scrollbar
          "
        >
          <p className="text-sm text-center mt-2 opacity-70">
            Swipe → to see more
          </p>
          <div className="card bg-[#485F88] dark:text-[#C0C9DB] shadow-md min-w-65 snap-start">
            <div className="card-body">
              <h3 className="card-title">Experience</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>IT Developer at PT Tekno Klop Indonesia</li>
                <li>Mobile Volunteer at TSA DTS Kominfo</li>
                <li>IoT Intern at TEFA HUB</li>
                <li>EEPROM Organization member</li>
              </ul>
            </div>
          </div>

          <div className="card bg-[#485F88] dark:text-[#C0C9DB] shadow-md min-w-65 snap-start">
            <div className="card-body">
              <h3 className="card-title">Education</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Bachelor of Engineering – Polinema</li>
              </ul>
            </div>
          </div>

          <div className="card bg-[#485F88] dark:text-[#C0C9DB] shadow-md min-w-65 snap-start">
            <div className="card-body">
              <h3 className="card-title">Certificate</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Dicoding Indonesia (React, Javascript, Flutter)</li>
                <li>Alterra Academy</li>
                <li>Codepolitan</li>
                <li>BNSP</li>
                <li>HackerRank</li>
                <li>Introduction to Front-End Development (Coursera)</li>
              </ul>
            </div>
          </div>

          <div className="card bg-[#485F88] dark:text-[#C0C9DB] shadow-md min-w-65 snap-start">
            <div className="card-body">
              <h3 className="card-title">Passion</h3>
              <p>Clean code, great UX, modern web development.</p>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="modal modal-open">
          <div className="modal-box max-w-full sm:max-w-4xl p-4 relative">
            <button
              className="btn btn-sm btn-circle absolute right-3 top-3 z-10"
              onClick={() => setIsModalOpen(false)}
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

              <div className="flex flex-1 flex-col items-center">
                <img
                  src={images[selectedImageIdx]}
                  className="max-w-full max-h-[60vh] sm:max-h-[75vh] object-contain rounded-lg"
                />
                <p className="text-center mt-4 text-sm">
                  {selectedImageIdx + 1} / {images.length}
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
            onClick={() => setIsModalOpen(false)}
          />
        </div>
      )}
    </div>
  );
}
