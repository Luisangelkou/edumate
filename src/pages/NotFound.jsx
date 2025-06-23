import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white text-center">
      <div>
        <h1 className="text-6xl font-bold text-blue-600">404</h1>
        <p className="text-gray-600 mt-4 text-xl">Página no encontrada</p>
        <Link to="/" className="mt-6 inline-block text-blue-500 hover:underline">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}