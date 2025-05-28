import React from "react";
import {
  Star,
  MapPin,
  Clock,
  Calendar,
  CheckCircle,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export interface CaregiverDetailProps {
  id: string;
  name: string;
  imageUrl: string;
  rating: number;
  reviewsCount: number;
  location: string;
  specialties: string[];
  hourlyRate: number;
  bio: string;
  experience: {
    years: number;
    description: string;
  };
  availability: string[];
  education: string[];
  certifications: string[];
  reviews: {
    id: string;
    author: string;
    date: string;
    rating: number;
    comment: string;
  }[];
}

const CaregiverProfile: React.FC<{ caregiver: CaregiverDetailProps }> = ({
  caregiver,
}) => {
  const {
    name,
    imageUrl,
    rating,
    reviewsCount,
    location,
    specialties,
    hourlyRate,
    bio,
    experience,
    availability,
    education,
    certifications,
    reviews,
  } = caregiver;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 p-6">
          <img
            src={imageUrl}
            alt={`${name} - Cuidador(a)`}
            className="w-full h-auto rounded-lg"
          />
        </div>

        <div className="md:w-2/3 p-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold">{name}</h1>
              <div className="flex items-center mt-2 text-gray-600">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{location}</span>
              </div>
            </div>

            <div className="text-right">
              <div className="flex items-center mb-2">
                <Star
                  className="h-5 w-5 text-yellow-500 mr-1"
                  fill="currentColor"
                />
                <span className="font-bold text-lg">{rating.toFixed(1)}</span>
                <span className="text-gray-500 ml-1">
                  ({reviewsCount} avaliações)
                </span>
              </div>
              <div className="text-xl font-bold text-secondary">
                R$ {hourlyRate.toFixed(2)}
                <span className="text-sm font-normal text-gray-500">/hora</span>
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {specialties.map((specialty, index) => (
              <Badge
                key={index}
                className="bg-primary/20 text-secondary border-0"
              >
                {specialty}
              </Badge>
            ))}
          </div>

          <div className="mt-6">
            <Button className="w-full md:w-auto bg-primary hover:bg-primary/90">
              Entrar em contato
            </Button>
          </div>
        </div>
      </div>

      {/* Tabs with detailed information */}
      <div className="p-6 border-t border-gray-200">
        <Tabs defaultValue="about">
          <TabsList className="mb-6">
            <TabsTrigger value="about">Sobre</TabsTrigger>
            <TabsTrigger value="experience">Experiência</TabsTrigger>
            <TabsTrigger value="reviews">Avaliações</TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Biografia</h3>
              <p className="text-gray-700">{bio}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Disponibilidade</h3>
              <div className="flex flex-wrap gap-3">
                {availability.map((time, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-gray-100 rounded-full px-3 py-1"
                  >
                    <Clock className="h-4 w-4 mr-2 text-gray-500" />
                    <span>{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="experience" className="space-y-6">
            <div>
              <div className="flex items-center mb-3">
                <Award className="mr-2 text-primary" />
                <h3 className="text-lg font-semibold">Experiência</h3>
              </div>
              <div className="ml-8">
                <p className="mb-2">
                  <span className="font-medium">{experience.years} anos</span>{" "}
                  de experiência como cuidador(a)
                </p>
                <p className="text-gray-700">{experience.description}</p>
              </div>
            </div>

            {education.length > 0 && (
              <div>
                <div className="flex items-center mb-3">
                  <Calendar className="mr-2 text-primary" />
                  <h3 className="text-lg font-semibold">Formação</h3>
                </div>
                <ul className="ml-8 space-y-2">
                  {education.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-4 w-4 mt-1 mr-2 text-green-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {certifications.length > 0 && (
              <div>
                <div className="flex items-center mb-3">
                  <Award className="mr-2 text-primary" />
                  <h3 className="text-lg font-semibold">Certificações</h3>
                </div>
                <ul className="ml-8 space-y-2">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-4 w-4 mt-1 mr-2 text-green-600" />
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </TabsContent>

          <TabsContent value="reviews" className="space-y-6">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="border-b border-gray-200 last:border-0 pb-4 mb-4 last:pb-0"
              >
                <div className="flex justify-between">
                  <div className="font-medium">{review.author}</div>
                  <div className="text-sm text-gray-500">{review.date}</div>
                </div>
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < review.rating ? "text-yellow-500" : "text-gray-300"
                      }`}
                      fill="currentColor"
                    />
                  ))}
                </div>
                <p className="mt-2 text-gray-700">{review.comment}</p>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CaregiverProfile;
