// src/pages/Dashboard.jsx
import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800">Bienvenido al Panel</h2>
        <p className="mt-2 text-gray-600">Aquí verás tus tareas, evaluaciones y progreso.</p>
      </div>
    </div>
  );
}