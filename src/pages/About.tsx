export default function About() {
  return (
    <div className="container mx-auto px-4 py-30">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg text-base-content/80 max-w-2xl mx-auto">
          I'm a dedicated developer with a passion for creating elegant
          solutions to complex problems. With experience in modern web
          technologies, I strive to build applications that are not only
          functional but also delightful to use. I love learning new
          technologies and collaborating with teams to bring ideas to life.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card bg-[#52677d] dark:text-[#d1cfc9] shadow-md">
          <div className="card-body">
            <h3 className="card-title">Experience</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Fullstack web development with React, TypeScript, Node.js</li>
              <li>EEPROM Organization member</li>
              <li>TEFA (Teaching Factory) IoT program participant</li>
              <li>Modern web technologies implementation</li>
            </ul>
          </div>
        </div>
        <div className="card bg-[#52677d] dark:text-[#d1cfc9] shadow-md">
          <div className="card-body">
            <h3 className="card-title">Education</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Bachelor's degree - State Polytechnic of Malang</li>
              <li>Dicoding Certification</li>
              <li>Alterra Academy Certification</li>
              <li>Continuous learning through online courses and projects</li>
            </ul>
          </div>
        </div>
        <div className="card bg-[#52677d] dark:text-[#d1cfc9] shadow-md">
          <div className="card-body">
            <h3 className="card-title">Passion</h3>
            <p>
              I'm passionate about clean code, user experience, and staying
              up-to-date with the latest web development trends.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
