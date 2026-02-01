import { useEffect, useState } from "react";
import profileImage from "../assets/profile.jpg";

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  
    useEffect(() => {
      const saved = localStorage.getItem("theme") === "dark";
      setIsDark(saved);
      document.documentElement.setAttribute(
        "data-theme",
        saved ? "dark" : "light",
      );
    }, []);
  return (
    <div className="hero min-h-screen bg-[#824D69] text-primary-content">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={profileImage} className="w-50 rounded-lg shadow-2xl" />
        <div className="max-w-md">
          <h1 className="text-5xl font-bold mb-4">Hi, I'm Nurus Laily</h1>

          <p className="text-xl mb-6">
            Fullstack developer passionate about building beautiful and
            functional web applications
          </p>
          <a
            href="/projects"
            className={`btn  ${isDark ? "bg-[#522959] hover:bg-[#180018]" : "bg-[#2A114B] hover:bg-[#522959]"} text-[#FAE5D8] border-0`}
          >
            View My Work
          </a>
        </div>
      </div>
    </div>
  );
}
