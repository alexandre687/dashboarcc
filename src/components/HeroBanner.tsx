
import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroBanner: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-secondary/20 to-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 order-2 md:order-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold font-nunito leading-tight text-secondary">
              Encontre cuidadores experientes e confiáveis perto de você
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              O CuidadosConecta ajuda você a encontrar o cuidador ideal para seus entes queridos, 
              com segurança, facilidade e confiança.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-medium">
                <Link to="/cuidadores" className="flex items-center gap-2">
                  <Search size={20} />
                  Procurar Cuidadores
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center md:justify-end">
            <img 
              src="https://images.unsplash.com/photo-1576765608866-5b51046452be?w=800&auto=format&fit=crop"
              alt="Cuidador auxiliando pessoa idosa" 
              className="rounded-lg shadow-lg max-w-full h-auto"
              style={{ maxWidth: "500px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
