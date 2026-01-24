import { AtSign, Facebook, Github, Instagram, Linkedin, Mail } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
        <p className="text-lg text-base-content/80">I'm always interested in hearing about new projects and opportunities.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h3 className="card-title mb-4">Send me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered w-full"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="input input-bordered w-full"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                className="textarea textarea-bordered w-full"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit" className="btn btn-primary w-full">Send Message</button>
            </form>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h3 className="card-title mb-4">Other Ways to Connect</h3>
            <div className="flex flex-col gap-3">
              <a href="mailto:nuruslaily88@gmail.com" className="btn btn-outline"><Mail />Email</a>
              <a href="https://github.com/nuruslaily" target="_blank" rel="noopener noreferrer" className="btn btn-outline"><Github /> GitHub</a>
              <a href="https://www.linkedin.com/in/nurus-laily-aprilia-5a553620a/" target="_blank" rel="noopener noreferrer" className="btn btn-outline"><Linkedin /> LinkedIn</a>
              <a href="https://web.facebook.com/nuruslailyaprillia/?locale=id_ID" target="_blank" rel="noopener noreferrer" className="btn btn-outline"><Facebook />Facebook</a>
              <a href="https://www.instagram.com/nuruslailya/" target="_blank" rel="noopener noreferrer" className="btn btn-outline"><Instagram />Instagram</a>
              <a href="https://www.threads.com/@nuruslailya" target="_blank" rel="noopener noreferrer" className="btn btn-outline"><AtSign />Threads</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
