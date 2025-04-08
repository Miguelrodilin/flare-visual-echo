
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoImage from '../assets/studio-flare-logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <a href="/" className="flex items-center">
          <img src={logoImage} alt="Studio Flare" className="h-10" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-800 hover:text-studio-blue transition-colors duration-300">Home</a>
          <a href="#about" className="text-gray-800 hover:text-studio-blue transition-colors duration-300">Sobre</a>
          <a href="#services" className="text-gray-800 hover:text-studio-blue transition-colors duration-300">Serviços</a>
          <a href="#portfolio" className="text-gray-800 hover:text-studio-blue transition-colors duration-300">Projetos</a>
          <a href="#contact" className="text-gray-800 hover:text-studio-blue transition-colors duration-300">Contato</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-gray-800 focus:outline-none"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <div className={`fixed inset-0 bg-white z-50 md:hidden transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex justify-end p-4">
            <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col items-center space-y-6 p-8">
            <a href="#home" className="text-xl text-gray-800 hover:text-studio-blue" onClick={toggleMenu}>Home</a>
            <a href="#about" className="text-xl text-gray-800 hover:text-studio-blue" onClick={toggleMenu}>Sobre</a>
            <a href="#services" className="text-xl text-gray-800 hover:text-studio-blue" onClick={toggleMenu}>Serviços</a>
            <a href="#portfolio" className="text-xl text-gray-800 hover:text-studio-blue" onClick={toggleMenu}>Projetos</a>
            <a href="#contact" className="text-xl text-gray-800 hover:text-studio-blue" onClick={toggleMenu}>Contato</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
