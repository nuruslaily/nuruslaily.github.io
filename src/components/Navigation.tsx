import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <div className="navbar bg-primary text-primary-content shadow-lg">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-lg font-bold">Nurus Laily Aprilia</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </div>
  )
}
