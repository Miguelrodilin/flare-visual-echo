
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center bg-gradient-to-r from-gray-900 to-studio-blue overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-white">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transformando ideias em experiências visuais impactantes
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Studio Flare é um estúdio de produção audiovisual e design que cria conteúdo inovador para marcas que querem se destacar.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={() => scrollToSection('services')}
              className="bg-white text-studio-blue font-semibold py-3 px-8 rounded-md hover:bg-gray-100 transition-colors duration-300"
            >
              Nossos Serviços
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border-2 border-white text-white font-semibold py-3 px-8 rounded-md hover:bg-white hover:text-studio-blue transition-colors duration-300"
            >
              Entre em Contato
            </button>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('about')} 
          className="flex flex-col items-center text-white opacity-80 hover:opacity-100 transition-opacity"
        >
          <span className="mb-2 text-sm">Saiba Mais</span>
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
