import { useState } from "react";
import { aboutData } from "../data/about";

export default function About() {
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);

  const images = aboutData.images;

  const handlePrevImage = () => {
    setSelectedImageIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setSelectedImageIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
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
        <div className="flex justify-center">
          <div className="relative">
            <img
              src={images[selectedImageIdx]}
              alt="About gallery"
              className="w-80 max-h-120 rounded-2xl shadow-xl cursor-pointer"
            />
            <div className="absolute -inset-4 bg-gradient-to-br from-[#824D69] to-[#2A114B] rounded-2xl blur-xl opacity-30 -z-10" />
            {images.length > 1 && (
              <div className="flex justify-between mt-4">
                <button
                  onClick={handlePrevImage}
                  className="btn btn-sm bg-[#2A114B] text-[#FAE5D8]">
                  Prev
                </button>
                <button
                  onClick={handleNextImage}
                  className="btn btn-sm bg-[#2A114B] text-[#FAE5D8]">
                  Next
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card bg-[#824D69] dark:text-[#FAE5D8] shadow-md">
            <div className="card-body">
              <h3 className="card-title">Experience</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>IT Developer at PT Tekno Klop Indonesia</li>
                <li>EEPROM Organization member</li>
                <li>TEFA IoT program participant</li>
              </ul>
            </div>
          </div>

          <div className="card bg-[#824D69] dark:text-[#FAE5D8] shadow-md">
            <div className="card-body">
              <h3 className="card-title">Education</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Bachelor – State Polytechnic of Malang</li>
                <li>Dicoding & Alterra Academy</li>
              </ul>
            </div>
          </div>

          <div className="card bg-[#824D69] dark:text-[#FAE5D8] shadow-md">
            <div className="card-body">
              <h3 className="card-title">Passion</h3>
              <p>
                Clean code, great UX, and keeping up with modern web
                development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
