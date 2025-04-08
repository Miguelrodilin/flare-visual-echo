
const testimonials = [
  {
    id: 1,
    name: "Ana Silva",
    position: "CEO, TechVision",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    quote: "A equipe do Studio Flare transformou completamente nossa marca. O nível de profissionalismo e criatividade superou todas as nossas expectativas. Nossos vídeos institucionais agora são referência no mercado."
  },
  {
    id: 2,
    name: "Roberto Santos",
    position: "Diretor de Marketing, Inova Alimentos",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "Trabalhamos com o Studio Flare em três campanhas consecutivas e estamos sempre impressionados com a qualidade e o comprometimento. Além de entregarem resultados excepcionais, são parceiros estratégicos valiosos."
  },
  {
    id: 3,
    name: "Carolina Mendes",
    position: "Fundadora, Estilo & Arte",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "A sessão fotográfica realizada pelo Studio Flare para nossa coleção de verão foi simplesmente impecável. Cada imagem conta uma história e valoriza nossas peças de uma forma única. Estamos ansiosos para trabalhar com eles novamente."
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O que nossos clientes dizem</h2>
          <div className="w-24 h-1 bg-studio-blue mx-auto"></div>
          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
            A satisfação de nossos clientes é a nossa maior conquista
          </p>
        </div>
        
        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-gray-800 p-8 rounded-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <div className="flex-1">
                <div className="text-3xl text-studio-blue mb-4">"</div>
                <p className="italic mb-6 text-gray-300">{testimonial.quote}</p>
              </div>
              
              <div className="flex items-center mt-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
