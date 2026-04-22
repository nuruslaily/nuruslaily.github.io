// import profileImage from "../assets/profile.jpg";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import { Link } from "react-scroll";
import Resume from "../assets/file/Resume-Nurus-Laily-A.pdf";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <section id="home" className="opacity-0 translate-y-10 animate-fadeUp">
        {/* <div className="hero min-h-screen bg-linear-to-br from-[#824D69] via-[#522959] to-[#2A114B] text-primary-content"> */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero min-h-screen bg-[#445c3f] text-[#eceee3]"
        >
          <div className="hero-content flex-col lg:flex-row-reverse">
            {/* <img
              src={profileImage}
              className="w-50 rounded-lg shadow-2xl"
              alt="Profile"
            /> */}
            <div className="max-w-lg text-center lg:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="lg:text-5xl sm:text-4xl font-bold mb-4"
              >
                Hi, I'm Nurus Laily Aprilia
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl mb-6"
              >
                Fullstack developer passionate about building beautiful and
                functional web applications
              </motion.p>

              <div className="flex justify-center lg:justify-start gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Link
                    to="projects"
                    smooth
                    duration={500}
                    className="
                  btn cursor-pointer
                  bg-[#445c3f] hover:bg-[#7d936c]
                  dark:bg-[#7d936c] dark:hover:bg-[#121524]
                  text-[#eceee3] border-0
                "
                  >
                    View My Work
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <a
                    href={Resume}
                    download
                    className="
                  btn cursor-pointer ml-2
                  bg-[#445c3f] hover:bg-[#7d936c]
                  dark:bg-[#7d936c] dark:hover:bg-[#121524]
                  text-[#eceee3] border-0
                "
                  >
                    Download Resume
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        id="about"
      >
        <About />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        id="projects"
      >
        <Projects />
      </motion.div>
      {/* <section id="projects">
      </section> */}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        id="contact"
      >
        <Contact />
      </motion.div>
    </>
  );
}
