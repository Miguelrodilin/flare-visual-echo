
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: "Campanha Publicitária Nacional",
    category: "video",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Uma série de comerciais para TV e internet que aumentaram as vendas do cliente em 40%."
  },
  {
    id: 2,
    title: "Identidade Visual Corporativa",
    category: "design",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Redesign completo da marca para uma empresa de tecnologia em expansão."
  },
  {
    id: 3,
    title: "Documentário Cultural",
    category: "video",
    image: "https://images.unsplash.com/photo-1610433572201-110753c6cff9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Documentário premiado sobre tradições culturais brasileiras."
  },
  {
    id: 4,
    title: "Animação Explicativa",
    category: "animation",
    image: "https://images.unsplash.com/photo-1551503766-ac63dfa6401c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Vídeo animado que simplificou conceitos complexos para uma startup de fintech."
  },
  {
    id: 5,
    title: "Catálogo de Produtos",
    category: "photo",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Sessão fotográfica de produtos para e-commerce de moda sustentável."
  },
  {
    id: 6,
    title: "Marketing de Conteúdo",
    category: "marketing",
    image: "https://images.unsplash.com/photo-1579762593175-20226054cad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    description: "Estratégia completa de conteúdo visual para redes sociais."
  }
];

const Portfolio = () => {
  const categories = ['all', 'video', 'photo', 'design', 'animation', 'marketing'];
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Projetos</h2>
          <div className="w-24 h-1 bg-studio-blue mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Confira alguns dos nossos trabalhos mais recentes e descubra como podemos dar vida às suas ideias
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center mb-12 space-x-2 space-y-2 md:space-y-0">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`capitalize px-6 py-2 rounded-full transition-colors duration-300 ${
                filter === category 
                  ? 'bg-studio-blue text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category === 'all' ? 'Todos' : category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden" style={{height: '240px'}}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-studio-blue bg-blue-50 rounded-full mb-2 capitalize">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-block bg-studio-blue text-white font-semibold py-3 px-8 rounded-md hover:bg-blue-900 transition-colors duration-300"
          >
            Inicie seu projeto
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
