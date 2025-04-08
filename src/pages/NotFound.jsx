
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center max-w-md">
          <h1 className="text-7xl font-bold text-studio-blue mb-6">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Página não encontrada</h2>
          <p className="text-gray-600 mb-8">
            A página que você está procurando não existe ou foi movida.
          </p>
          <a 
            href="/"
            className="inline-block bg-studio-blue text-white font-semibold py-3 px-8 rounded-md hover:bg-blue-900 transition-colors duration-300"
          >
            Voltar para Home
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
