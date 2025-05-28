
import React from 'react';
import { Heart, Users, Shield, Award } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold font-nunito text-white mb-6">
            Sobre o CuidadosConecta
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Nossa missão é conectar famílias a cuidadores de idosos qualificados, 
            proporcionando tranquilidade e bem-estar para todos.
          </p>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold font-nunito text-secondary mb-6">
                Nossa História
              </h2>
              <p className="text-gray-700 mb-4">
                O CuidadosConecta nasceu da experiência pessoal de seus fundadores, que 
                enfrentaram dificuldades para encontrar cuidadores confiáveis para seus 
                próprios familiares idosos.
              </p>
              <p className="text-gray-700 mb-4">
                Percebendo que muitas famílias enfrentavam o mesmo desafio, decidimos criar 
                uma plataforma que conectasse famílias a cuidadores qualificados de forma 
                simples, segura e eficiente.
              </p>
              <p className="text-gray-700">
                Desde 2020, temos ajudado centenas de famílias a encontrar o cuidado ideal 
                para seus entes queridos, sempre com o compromisso de oferecer um serviço 
                de excelência e humanizado.
              </p>
            </div>
            
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?w=800&auto=format&fit=crop" 
                alt="Equipe CuidadosConecta" 
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-nunito text-secondary mb-12 text-center">
            Nossos Valores
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Cuidado</h3>
              <p className="text-gray-600">
                Priorizamos o bem-estar e a dignidade de cada idoso, respeitando suas 
                necessidades individuais.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Confiança</h3>
              <p className="text-gray-600">
                Construímos relações baseadas em transparência e segurança entre 
                famílias e cuidadores.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Excelência</h3>
              <p className="text-gray-600">
                Buscamos constantemente aprimorar nossos serviços para oferecer a 
                melhor experiência possível.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Comunidade</h3>
              <p className="text-gray-600">
                Fomentamos uma comunidade de apoio e respeito entre todos os 
                envolvidos no cuidado com idosos.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-nunito text-secondary mb-12 text-center">
            Nossa Equipe
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop" 
                alt="Ana Martins - CEO" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold">Ana Martins</h3>
              <p className="text-gray-500">CEO & Fundadora</p>
              <p className="mt-3 text-gray-700">
                Empreendedora com experiência em cuidados de saúde e tecnologia.
              </p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop" 
                alt="Ricardo Santos - COO" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold">Ricardo Santos</h3>
              <p className="text-gray-500">COO & Co-fundador</p>
              <p className="mt-3 text-gray-700">
                Especialista em operações com passagem por grandes empresas de saúde.
              </p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&auto=format&fit=crop" 
                alt="Carla Oliveira - Diretora de Cuidadores" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold">Carla Oliveira</h3>
              <p className="text-gray-500">Diretora de Cuidadores</p>
              <p className="mt-3 text-gray-700">
                Enfermeira com 15 anos de experiência em geriatria e cuidados especializados.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
