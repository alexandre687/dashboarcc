
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CaregiverProfile, { CaregiverDetailProps } from '@/components/CaregiverProfile';
import { getCaregiverById } from '@/data/mockCaregivers';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const CaregiverProfilePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [caregiver, setCaregiver] = useState<CaregiverDetailProps | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API call
    setLoading(true);
    
    setTimeout(() => {
      if (id) {
        const caregiverData = getCaregiverById(id);
        if (caregiverData) {
          setCaregiver(caregiverData);
        }
      }
      setLoading(false);
    }, 500);
  }, [id]);
  
  const handleBack = () => {
    navigate(-1);
  };
  
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="animate-pulse bg-white rounded-lg h-96"></div>
        </div>
      </div>
    );
  }
  
  if (!caregiver) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-gray-700 mb-4">
            Cuidador não encontrado
          </h1>
          <p className="text-gray-600 mb-6">
            O perfil que você está procurando não existe ou foi removido.
          </p>
          <Button onClick={handleBack}>Voltar</Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <Button 
            variant="ghost" 
            onClick={handleBack} 
            className="flex items-center text-gray-600"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Button>
        </div>
        
        <CaregiverProfile caregiver={caregiver} />
      </div>
    </div>
  );
};

export default CaregiverProfilePage;
