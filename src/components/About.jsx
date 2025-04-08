
import { Play, Award, Users, Globe } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre o Studio Flare</h2>
          <div className="w-24 h-1 bg-studio-blue mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Somos um estúdio criativo dedicado a transformar conceitos em experiências visuais impactantes através da tecnologia e inovação.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
              alt="Equipe Studio Flare" 
              className="w-full h-auto"
            />
          </div>

          {/* Right Column - Text */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Transformando visões em realidade desde 2015</h3>
            <p className="text-gray-600 mb-6">
              O Studio Flare nasceu da paixão por contar histórias através de imagens, sons e experiências. Combinamos tecnologia de ponta, criatividade e estratégia para ajudar marcas e empresas a se destacarem em um mundo digital cada vez mais competitivo.
            </p>
            <p className="text-gray-600 mb-8">
              Nossa equipe multidisciplinar de diretores, designers, cinegrafistas e produtores trabalha em harmonia para criar conteúdo que não apenas captura a atenção, mas também transmite mensagens poderosas que ressoam com o público.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="flex justify-center mb-2 text-studio-blue">
                  <Play size={32} />
                </div>
                <h4 className="text-2xl font-bold">250+</h4>
                <p className="text-gray-500 text-sm">Projetos</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2 text-studio-blue">
                  <Award size={32} />
                </div>
                <h4 className="text-2xl font-bold">15</h4>
                <p className="text-gray-500 text-sm">Prêmios</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2 text-studio-blue">
                  <Users size={32} />
                </div>
                <h4 className="text-2xl font-bold">120+</h4>
                <p className="text-gray-500 text-sm">Clientes</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2 text-studio-blue">
                  <Globe size={32} />
                </div>
                <h4 className="text-2xl font-bold">10+</h4>
                <p className="text-gray-500 text-sm">Países</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
