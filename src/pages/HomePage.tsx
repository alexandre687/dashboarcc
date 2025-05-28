import React, { useEffect } from "react";
import HeroBanner from "@/components/HeroBanner";
import CaregiverList from "@/components/CaregiverList";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Star, Shield, Clock, Heart } from "lucide-react";

const HomePage: React.FC = () => {
  const [caregivers, setCaregivers] = React.useState([]);
  useEffect(() => {
    const cuidadoresEmDestaque = async () => {
      const response = await fetch(import.meta.env.VITE_URL_CUIDADORES);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setCaregivers(data.pessoas);
    };

    cuidadoresEmDestaque()
      .then(() => {
        console.log("Cuidadores em destaque carregados com sucesso");
      })
      .catch((error) => {
        console.error("Error fetching caregivers:", error);
      });
  }, []);

  return (
    <div className="min-h-screen">
      <HeroBanner />

      {/* Featured Caregivers Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-primary/20 text-primary border-0 mb-2">
              Cuidadores
            </Badge>
            <h2 className="text-3xl font-bold font-nunito text-secondary">
              Cuidadores em Destaque
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Profissionais experientes e bem avaliados, prontos para oferecer o
              melhor cuidado para seus entes queridos.
            </p>
          </div>

          <CaregiverList caregivers={caregivers} />

          <div className="mt-10 text-center">
            <Link
              to="/cuidadores"
              className="inline-flex items-center text-primary font-medium hover:underline"
            >
              Ver todos os cuidadores
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-primary/20 text-primary border-0 mb-2">
              Como Funciona
            </Badge>
            <h2 className="text-3xl font-bold font-nunito text-secondary">
              Encontre o Cuidador Ideal em 3 Passos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">1. Busque</h3>
              <p className="text-gray-600">
                Use nossos filtros para encontrar cuidadores com as
                especialidades e disponibilidade que você precisa.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">2. Compare</h3>
              <p className="text-gray-600">
                Analise avaliações, experiências e especialidades para escolher
                o profissional mais adequado.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">3. Contrate</h3>
              <p className="text-gray-600">
                Entre em contato diretamente e contrate o cuidador que melhor
                atende às suas necessidades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-primary/20 text-primary border-0 mb-2">
                Por que nos escolher
              </Badge>
              <h2 className="text-3xl font-bold font-nunito text-secondary mb-6">
                Cuidado de Qualidade com Total Tranquilidade
              </h2>

              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Cuidadores Verificados</h3>
                    <p className="text-gray-600">
                      Todos os cuidadores passam por uma rigorosa verificação de
                      antecedentes e credenciais.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Avaliações Reais</h3>
                    <p className="text-gray-600">
                      Veja feedbacks autênticos de famílias que já contrataram
                      nossos cuidadores.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">
                      Flexibilidade de Horários
                    </h3>
                    <p className="text-gray-600">
                      Contrate por horas, dias ou períodos prolongados, conforme
                      sua necessidade.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1574618863447-84588961d33e?w=800&auto=format&fit=crop"
                alt="Cuidadora auxiliando uma pessoa idosa"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-nunito text-white mb-6">
            Pronto para encontrar o cuidador ideal?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Conectamos você aos melhores cuidadores de idosos da sua região, com
            as especialidades que você precisa.
          </p>
          <Link
            to="/cuidadores"
            className="inline-block bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-md"
          >
            Procurar Cuidadores
          </Link>
        </div>
      </section>
    </div>
  );
};

// Import at the top
import { Search } from "lucide-react";

export default HomePage;
