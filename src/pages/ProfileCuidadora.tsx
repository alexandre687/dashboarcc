import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Building2,
  Calendar,
  CheckCircle,
  Clock,
  DollarSign,
  Heart,
  Home,
  Mail,
  MapPin,
  Phone,
  Shield,
  Star,
  User,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProfileCuidadora() {
  const { id } = useParams<{ id: string }>();
  const [caregiverData, setCaregiverData] = useState({
    display_name: { stringValue: "" },
    photo_url: { stringValue: "" },
    status: { stringValue: "" },
    genero: { stringValue: "" },
    bairro: { stringValue: "" },
    cidade: { stringValue: "" },
    estado: { stringValue: "" },
    phone_number: { stringValue: "" },
    email: { stringValue: "" },
    valorHora: { stringValue: "" },
    yearsOfExperience: { stringValue: "" },
    monthsOfExperience: { stringValue: "" },
    qtdAtendimentos: { stringValue: "" },
    caracteristicas: {
      arrayValue: {
        values: [],
      },
    },
    experiences: {
      arrayValue: {
        values: [],
      },
    },
    availability: {
      arrayValue: {
        values: [],
      },
    },
    ambientesOndeAtende: {
      arrayValue: {
        values: [],
      },
    },
    prefFaixaEtaria: {
      arrayValue: {
        values: [],
      },
    },
    prefTipoAtendimento: { stringValue: "" },
    prefAmbiente: { stringValue: "" },
    prefNivelDependencia: {
      arrayValue: {
        values: [],
      },
    },
    semFormacao: { stringValue: "" },
    prefGenero: { stringValue: "" },
    rua: { stringValue: "" },
    CEP: { stringValue: "" },
  } as any);
  if (id) {
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `${import.meta.env.VITE_URL_CUIDADOR_PROFILE}?id=${id}`
          );
          if (!response.ok) {
            throw new Error("Erro ao buscar dados da cuidadora");
          }
          const data = await response.json();
          setCaregiverData(data[0].pessoa);
        } catch (error) {
          console.error("Erro:", error);
        }
      };
      fetchData();
    }, []);
  }

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const formatPeriod = (period: string) => {
    const periods = {
      manha: "Manhã",
      tarde: "Tarde",
      noite: "Noite",
    };
    return periods[period as keyof typeof periods] || period;
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4">
      <div className="max-w-6xl mx-auto">
        <Card className="mb-6 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="relative">
                <Avatar className="w-32 h-32 ring-4 ring-blue-100">
                  <AvatarImage
                    src={caregiverData.photo_url.stringValue}
                    alt={caregiverData.display_name.stringValue}
                  />
                  <AvatarFallback className="text-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                    {getInitials(caregiverData.display_name.stringValue)}
                  </AvatarFallback>
                </Avatar>
                {caregiverData.status === "Aprovado" && (
                  <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-2">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                )}
              </div>

              <div className="flex-1 space-y-4">
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-2">
                    {caregiverData.display_name.stringValue}
                  </h1>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge
                      variant="secondary"
                      className="bg-green-100 text-green-800"
                    >
                      <Shield className="w-4 h-4 mr-1" />
                      {caregiverData.status.stringValue}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-purple-700 border-purple-200"
                    >
                      <User className="w-4 h-4 mr-1" />
                      {caregiverData.genero.stringValue}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-blue-500" />
                      <span>
                        {caregiverData.bairro.stringValue},{" "}
                        {caregiverData.cidade.stringValue} -{" "}
                        {caregiverData.estado.stringValue}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-5 h-5 text-green-500" />
                      <span>{caregiverData.phone_number.stringValue}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-5 h-5 text-orange-500" />
                      <span>{caregiverData.email.stringValue}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-emerald-500" />
                      <span className="font-semibold">
                        R$ {caregiverData.valorHora.stringValue}/hora
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    <Heart className="w-4 h-4 mr-2" />
                    Contratar Cuidadora
                  </Button>
                  <Button
                    variant="outline"
                    className="border-blue-200 text-blue-700 hover:bg-blue-50"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Entrar em Contato
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Coluna esquerda - Informações principais */}
          <div className="lg:col-span-2 space-y-6">
            {/* Experiência e Estatísticas */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Star className="w-6 h-6 text-yellow-500" />
                  Experiência Profissional
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600">
                      {caregiverData.yearsOfExperience.stringValue}
                    </div>
                    <div className="text-sm text-gray-600">
                      Anos de Experiência
                    </div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                    <div className="text-3xl font-bold text-green-600">
                      {caregiverData.monthsOfExperience.stringValue}
                    </div>
                    <div className="text-sm text-gray-600">Meses Ativos</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                    <div className="text-3xl font-bold text-purple-600">
                      {caregiverData.qtdAtendimentos.stringValue}
                    </div>
                    <div className="text-sm text-gray-600">Atendimentos</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Características Pessoais */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Heart className="w-6 h-6 text-red-500" />
                  Características Pessoais
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {
                    caregiverData.caracteristicas.arrayValue.values.map(
                      (caracteristica, index) => (
                        <Badge
                          key={index.stringValue}
                          variant="secondary"
                          className="bg-gradient-to-r from-pink-100 to-purple-100 text-purple-800 border-purple-200 hover:from-pink-200 hover:to-purple-200 transition-colors"
                        >
                          {caracteristica.stringValue}
                        </Badge>
                      )
                    ).stringValue
                  }
                </div>
              </CardContent>
            </Card>

            {/* Experiências com Condições */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Shield className="w-6 h-6 text-blue-500" />
                  Experiência com Condições
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {
                    caregiverData.experiences.arrayValue.values.map(
                      (experience, index) => (
                        <div
                          key={index.stringValue}
                          className="flex items-center gap-2 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm font-medium text-gray-700">
                            {experience.stringValue}
                          </span>
                        </div>
                      )
                    ).stringValue
                  }
                </div>
              </CardContent>
            </Card>

            {/* Disponibilidade */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Calendar className="w-6 h-6 text-green-500" />
                  Disponibilidade Semanal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {
                    caregiverData.availability.arrayValue.values.map(
                      (day, index) => (
                        <div
                          key={index.stringValue}
                          className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                        >
                          <div className="font-medium text-gray-700 w-20">
                            {day.Day}
                          </div>
                          <div className="flex gap-2">
                            {["manha", "tarde", "noite"].map((period) => (
                              <Badge
                                key={period}
                                variant={
                                  day[period as keyof typeof day]
                                    ? "default"
                                    : "secondary"
                                }
                                className={
                                  day[period as keyof typeof day]
                                    ? "bg-green-500 hover:bg-green-600"
                                    : "bg-gray-200 text-gray-500"
                                }
                              >
                                {formatPeriod(period)}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )
                    ).stringValue
                  }
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Coluna direita - Informações complementares */}
          <div className="space-y-6">
            {/* Ambientes de Trabalho */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Building2 className="w-5 h-5 text-indigo-500" />
                  Ambientes de Trabalho
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {
                  caregiverData.ambientesOndeAtende.arrayValue.values.map(
                    (ambiente, index) => (
                      <div
                        key={index.stringValue}
                        className="flex items-center gap-2 p-3 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg"
                      >
                        {ambiente === "Hospitalar" ? (
                          <Building2 className="w-5 h-5 text-indigo-600" />
                        ) : (
                          <Home className="w-5 h-5 text-blue-600" />
                        )}
                        <span className="font-medium text-gray-700">
                          {ambiente.stringValue}
                        </span>
                      </div>
                    )
                  ).stringValue
                }
              </CardContent>
            </Card>

            {/* Preferências */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Star className="w-5 h-5 text-amber-500" />
                  Preferências
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="text-sm font-medium text-gray-600 mb-2">
                    Faixa Etária Preferida
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {
                      caregiverData.prefFaixaEtaria.arrayValue.values.map(
                        (faixa, index) => (
                          <Badge
                            key={index.stringValue}
                            variant="outline"
                            className="text-amber-700 border-amber-200"
                          >
                            {faixa.stringValue}
                          </Badge>
                        )
                      ).stringValue
                    }
                  </div>
                </div>

                <Separator />

                <div>
                  <div className="text-sm font-medium text-gray-600 mb-2">
                    Tipo de Atendimento
                  </div>
                  <Badge
                    variant="outline"
                    className="text-green-700 border-green-200"
                  >
                    {caregiverData.prefTipoAtendimento.stringValue}
                  </Badge>
                </div>

                <Separator />

                <div>
                  <div className="text-sm font-medium text-gray-600 mb-2">
                    Ambiente Preferido
                  </div>
                  <Badge
                    variant="outline"
                    className="text-blue-700 border-blue-200"
                  >
                    {caregiverData.prefAmbiente.stringValue}
                  </Badge>
                </div>

                <Separator />

                <div>
                  <div className="text-sm font-medium text-gray-600 mb-2">
                    Níveis de Dependência
                  </div>
                  <div className="space-y-2">
                    {
                      caregiverData.prefNivelDependencia.arrayValue.values.map(
                        (nivel, index) => (
                          <div
                            key={index.stringValue}
                            className="text-sm p-2 bg-gray-50 rounded border-l-4 border-purple-400"
                          >
                            {nivel.stringValue}
                          </div>
                        )
                      ).stringValue
                    }
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Informações Adicionais */}
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Clock className="w-5 h-5 text-gray-500" />
                  Informações Adicionais
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">
                    Formação Específica
                  </span>
                  <Badge
                    variant={
                      caregiverData.semFormacao.stringValue
                        ? "secondary"
                        : "default"
                    }
                  >
                    {caregiverData.semFormacao.stringValue
                      ? "Sem formação específica"
                      : "Com formação"}
                  </Badge>
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">
                    Preferência de Gênero
                  </span>
                  <span className="text-sm font-medium">
                    {caregiverData.prefGenero.stringValue}
                  </span>
                </div>

                <Separator />

                <div className="text-xs text-gray-500 space-y-1">
                  <div>
                    <strong>Endereço:</strong> {caregiverData.rua.stringValue}
                  </div>
                  <div>
                    <strong>CEP:</strong> {caregiverData.CEP.stringValue}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
