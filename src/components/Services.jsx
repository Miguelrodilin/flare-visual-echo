
import { Video, Camera, Shapes, Film, PenTool, Monitor } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-studio-blue">
      <div className="text-studio-blue mb-4">
        <Icon size={40} />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services = () => {
  const servicesList = [
    {
      icon: Video,
      title: "Produção de Vídeo",
      description: "Desde comerciais até documentários, criamos vídeos que contam sua história com qualidade cinematográfica."
    },
    {
      icon: Camera,
      title: "Fotografia Profissional",
      description: "Capturamos momentos e produtos com um olhar único, destacando o que há de melhor em sua marca."
    },
    {
      icon: Shapes,
      title: "Design Gráfico",
      description: "Desenvolvemos identidades visuais completas, materiais impressos e digitais que comunicam sua essência."
    },
    {
      icon: Film,
      title: "Pós-Produção",
      description: "Edição, colorização, efeitos visuais e finalização de áudio para dar vida às suas produções."
    },
    {
      icon: PenTool,
      title: "Animação e Motion",
      description: "Criamos animações 2D e 3D, motion graphics e efeitos visuais para destacar sua mensagem."
    },
    {
      icon: Monitor,
      title: "Marketing Digital",
      description: "Estratégias de conteúdo visual para mídias sociais e campanhas digitais que geram engajamento."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Serviços</h2>
          <div className="w-24 h-1 bg-studio-blue mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções criativas completas para todas as suas necessidades audiovisuais e de design
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <ServiceCard 
              key={index} 
              icon={service.icon} 
              title={service.title} 
              description={service.description} 
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Precisa de um serviço personalizado? Entre em contato conosco para discutir suas necessidades específicas.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-studio-blue text-white font-semibold py-3 px-8 rounded-md hover:bg-blue-900 transition-colors duration-300"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
