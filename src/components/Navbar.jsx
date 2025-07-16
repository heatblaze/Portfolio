import { NavLink } from "react-router-dom";

const Navbar = () => (
  <header className="w-full absolute top-0 left-0 z-50 bg-transparent">
    <div className="max-w-5xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 py-3 sm:py-4">
      {/* Logo on the left */}
      <NavLink to="/" className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white flex items-center justify-center font-bold shadow-md">
        <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-lg sm:text-xl font-bold">AC</span>
      </NavLink>
      {/* Links on the right */}
      <nav className="flex gap-6 sm:gap-8 md:gap-10 text-base sm:text-lg font-medium">
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
