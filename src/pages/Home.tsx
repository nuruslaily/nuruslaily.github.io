import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import { Link } from "react-scroll";
import Resume from "../assets/file/Resume-Nurus-Laily-Aprilia_Fullstack-Developer.pdf";
import { motion } from "framer-motion";
// import profileImage from "../assets/profile.jpg";
// import TechIcon from "../components/TechIcon";

// const floatingIcons = [
//   { name: "React", className: "-top-3 right-10", duration: 3.2, delay: 0 },
//   {
//     name: "TypeScript",
//     className: "top-16 -right-3",
//     duration: 3.8,
//     delay: 0.4,
//   },
//   {
//     name: "Flutter",
//     className: "bottom-16 -left-4",
//     duration: 4.1,
//     delay: 0.8,
//   },
//   {
//     name: "Tailwind CSS",
//     className: "-bottom-2 left-12",
//     duration: 3.5,
//     delay: 1.2,
//   },
//   {
//     name: "PostgreSQL",
//     className: "top-1/2 -left-6",
//     duration: 4.4,
//     delay: 1.6,
//   },
// ];

export default function Home() {
  return (
    <>
      <section id="home" className="opacity-0 translate-y-10 animate-fadeUp">
        {/* <div className="hero min-h-screen bg-linear-to-br from-[#824D69] via-[#522959] to-[#2A114B] text-primary-content"> */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero min-h-screen overflow-hidden bg-[#445c3f] text-[#eceee3]"
        >
          <div className="hero-content flex-col lg:flex-row-reverse">
            {/* <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mb-12 lg:mb-0 lg:ml-10"
            >
              <div className="absolute -inset-6 rounded-full bg-[#7d936c]/40 blur-2xl" />

              <div className="relative h-60 w-60 sm:h-72 sm:w-72 rounded-full p-1 bg-linear-to-br from-[#eceee3]/70 via-[#eceee3]/20 to-[#7d936c]/10 shadow-2xl">
                <img
                  src={profileImage}
                  alt="Nurus Laily Aprilia"
                  className="h-full w-full rounded-full object-cover object-top"
                />
              </div>

              {floatingIcons.map((icon) => (
                <motion.div
                  key={icon.name}
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: icon.duration,
                    delay: icon.delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className={`absolute flex h-11 w-11 items-center justify-center rounded-full border border-[#eceee3]/20 bg-[#2f4029]/80 text-[#eceee3] shadow-lg backdrop-blur ${icon.className}`}
                >
                  <TechIcon name={icon.name} className="h-5 w-5" />
                </motion.div>
              ))}
            </motion.div> */}

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
                  bg-[#2f4029] hover:bg-[#7d936c]
                  dark:bg-[#121524] dark:hover:bg-[#2a3147]
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
                  bg-[#2f4029] hover:bg-[#7d936c]
                  dark:bg-[#121524] dark:hover:bg-[#2a3147]
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

      <div className="h-32 bg-linear-to-b from-[#445c3f] via-[#445c3f]/30 to-transparent" />

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
