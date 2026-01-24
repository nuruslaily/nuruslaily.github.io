export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg text-base-content/80 max-w-2xl mx-auto">
          I'm a dedicated developer with a passion for creating elegant solutions to complex problems. 
          With experience in modern web technologies, I strive to build applications that are not only 
          functional but also delightful to use. I love learning new technologies and collaborating 
          with teams to bring ideas to life.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card bg-base-200 shadow-md">
          <div className="card-body">
            <h3 className="card-title">Experience</h3>
            <p>Several years of experience in fullstack web development using React, TypeScript, Node.js, and modern web technologies.</p>
          </div>
        </div>
        <div className="card bg-base-200 shadow-md">
          <div className="card-body">
            <h3 className="card-title">Education</h3>
            <p>Self taught developer with continuous learning through online courses, projects, and community involvement.</p>
          </div>
        </div>
        <div className="card bg-base-200 shadow-md">
          <div className="card-body">
            <h3 className="card-title">Passion</h3>
            <p>I'm passionate about clean code, user experience, and staying up-to-date with the latest web development trends.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
