// import profileImage from "../assets/profile.jpg";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import { Link } from "react-scroll";
import Resume from "../assets/file/Resume-Nurus-Laily-A.pdf";

export default function Home() {
  return (
    <>
      <section id="home">
        {/* <div className="hero min-h-screen bg-linear-to-br from-[#824D69] via-[#522959] to-[#2A114B] text-primary-content"> */}
        <div className="hero min-h-screen bg-linear-to-br from-[#485F88] via-[#384C65] to-[#121524] text-primary-content">
          <div className="hero-content flex-col lg:flex-row-reverse">
            {/* <img
              src={profileImage}
              className="w-50 rounded-lg shadow-2xl"
              alt="Profile"
            /> */}
            <div className="max-w-lg text-center lg:text-left">
              <h1 className="lg:text-5xl sm:text-4xl font-bold mb-4 sm">
                Hi, I'm Nurus Laily Aprilia
              </h1>

              <p className="text-xl mb-6">
                Fullstack developer passionate about building beautiful and
                functional web applications
              </p>

              <Link
                to="projects"
                smooth
                duration={500}
                className="
                  btn cursor-pointer
                  bg-[#121524] hover:bg-[#384C65]
                  dark:bg-[#384C65] dark:hover:bg-[#180018]
                  text-[#C0C9DB] border-0
                "
              >
                View My Work
              </Link>
              <a
                href={Resume}
                download
                className="
                  btn cursor-pointer ml-2
                  bg-[#485F88] hover:bg-[#121524]
                  dark:bg-[#485F88] dark:hover:bg-[#180018]
                  text-[#C0C9DB] border-0
                "
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
}
