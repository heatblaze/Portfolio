import { NavLink } from "react-router-dom";

const Navbar = () => (
  <header className="w-full absolute top-0 left-0 z-50 bg-transparent">
    <div className="max-w-5xl mx-auto flex items-center justify-between px-8 py-4">
      {/* Logo on the left */}
      <NavLink to="/" className="w-10 h-10 rounded-lg bg-white flex items-center justify-center font-bold shadow-md">
        <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-xl font-bold">AC</span>
      </NavLink>
      {/* Links on the right */}
      <nav className="flex gap-10 text-lg font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-gray-900"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-gray-900"
          }
        >
          Projects
        </NavLink>
      </nav>
    </div>
  </header>
);

export default Navbar;
