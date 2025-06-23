// src/components/Navbar.jsx
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 text-blue-600 font-extrabold text-2xl">
            <Link to="/dashboard">Edumate</Link>
          </div>

          {/* Links */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link
              to="/dashboard"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Dashboard
            </Link>
            <Link
              to="/courses"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Cursos
            </Link>
            <Link
              to="/calendar"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Calendario
            </Link>
            <Link
              to="/profile"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Perfil
            </Link>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
            >
              Cerrar sesión
            </button>
          </div>

          {/* Menú móvil (para después si quieres hacerlo responsive) */}
          <div className="md:hidden">
            {/* Aquí iría un botón hamburguesa para abrir menú móvil si quieres hacerlo */}
          </div>
        </div>
      </div>
    </nav>
  );
}
