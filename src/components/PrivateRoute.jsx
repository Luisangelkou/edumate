// src/components/PrivateRoute.jsx
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoggedIn(!!user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <p className="text-center mt-20">Cargando...</p>;

  return loggedIn ? children : <Navigate to="/" />;
}
