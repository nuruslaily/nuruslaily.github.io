import profileImage from "../assets/profile.jpg";

export default function Home() {
  return (
    <div className="hero min-h-screen bg-[#1c2e4a] text-primary-content">
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
            className="btn bg-[#52677d] border-0 hover:bg-[#0f1a2b] dark:text-[#d1cfc9]"
          >
            View My Work
          </a>
        </div>
      </div>
    </div>
  );
}
