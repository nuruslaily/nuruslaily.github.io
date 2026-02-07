import {
  AtSign,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
} from "lucide-react";
import { useState } from "react";

export default function Contact() {
  // const [isDark, setIsDark] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  // useEffect(() => {
  //   const saved = localStorage.getItem("theme") === "dark";
  //   setIsDark(saved);
  //   document.documentElement.setAttribute(
  //     "data-theme",
  //     saved ? "dark" : "light",
  //   );
  // }, []);

  return (
    <div className="container mx-auto px-4 py-30">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
        <h5 className="text-base-content/80">
          I'm always interested in hearing about new projects and opportunities.
        </h5>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="card bg-[#824D69] text-[#180018] dark:text-[#FAE5D8] shadow-xl">
          <div className="card-body">
            <h3 className="card-title mb-4">Send me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered w-full text-base-content/80"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="input input-bordered w-full text-base-content/80"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                className="textarea textarea-bordered w-full text-base-content/80"
                value={formData.message}
                onChange={handleChange}
                required></textarea>
              <button
                type="submit"
                className="btn bg-[#2A114B] border-0 hover:bg-[#180018] dark:text-[#FAE5D8] w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="card bg-[#824D69] text-[#FAE5D8] shadow-xl">
          <div className="card-body">
            <h3 className="card-title mb-4">Other Ways to Connect</h3>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:nuruslaily88@gmail.com"
                className="btn btn-outline">
                <Mail />
                Email
              </a>
              <a
                href="https://github.com/nuruslaily"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline">
                <Github /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/nurus-laily-aprilia-5a553620a/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline">
                <Linkedin /> LinkedIn
              </a>
              <a
                href="https://web.facebook.com/nuruslailyaprillia/?locale=id_ID"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline">
                <Facebook />
                Facebook
              </a>
              <a
                href="https://www.instagram.com/nuruslailya/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline">
                <Instagram />
                Instagram
              </a>
              <a
                href="https://www.threads.com/@nuruslailya"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline">
                <AtSign />
                Threads
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
