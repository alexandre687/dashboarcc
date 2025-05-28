
import React, { useState } from 'react';
import { Search, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface SearchFiltersProps {
  onSearch?: (filters: FilterValues) => void;
}

interface FilterValues {
  location: string;
  availability: string;
  specialties: string[];
}

const SearchFilters: React.FC<SearchFiltersProps> = ({ onSearch }) => {
  const [location, setLocation] = useState('');
  const [availability, setAvailability] = useState('');
  const [specialties, setSpecialties] = useState<string[]>([]);

  const specialtiesList = [
    { id: 'alzheimer', label: 'Alzheimer' },
    { id: 'parkinson', label: 'Parkinson' },
    { id: 'demencia', label: 'Demência' },
    { id: 'fisioterapia', label: 'Fisioterapia' },
    { id: 'pos_avc', label: 'Pós-AVC' },
    { id: 'mobilidade_reduzida', label: 'Mobilidade Reduzida' },
  ];

  const handleSpecialtyChange = (specialtyId: string, checked: boolean) => {
    if (checked) {
      setSpecialties([...specialties, specialtyId]);
    } else {
      setSpecialties(specialties.filter(id => id !== specialtyId));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch({ location, availability, specialties });
    }
  };

  return (
    <div className="bg-white py-8 px-4 shadow-md rounded-lg">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Localização */}
          <div className="space-y-2">
            <Label htmlFor="location" className="text-sm font-medium">
              Localização
            </Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <Input
                id="location"
                placeholder="Cidade ou CEP"
                className="pl-10"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>
          
          {/* Disponibilidade */}
          <div className="space-y-2">
            <Label htmlFor="availability" className="text-sm font-medium">
              Disponibilidade
            </Label>
            <div className="relative">
              <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <Select value={availability} onValueChange={setAvailability}>
                <SelectTrigger className="pl-10">
                  <SelectValue placeholder="Selecione o período" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="manha">Manhã</SelectItem>
                  <SelectItem value="tarde">Tarde</SelectItem>
                  <SelectItem value="noite">Noite</SelectItem>
                  <SelectItem value="integral">Período Integral</SelectItem>
                  <SelectItem value="pernoite">Pernoite</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Botão de Busca */}
          <div className="flex items-end">
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
              <Search className="mr-2 h-4 w-4" /> Buscar
            </Button>
          </div>
        </div>
        
        {/* Especialidades */}
        <div className="mt-6">
          <Label className="text-sm font-medium mb-3 block">
            Especialidades
          </Label>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {specialtiesList.map((specialty) => (
              <div key={specialty.id} className="flex items-center space-x-2">
                <Checkbox
                  id={`specialty-${specialty.id}`}
                  checked={specialties.includes(specialty.id)}
                  onCheckedChange={(checked) => 
                    handleSpecialtyChange(specialty.id, checked === true)
                  }
                />
                <Label
                  htmlFor={`specialty-${specialty.id}`}
                  className="text-sm cursor-pointer"
                >
                  {specialty.label}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchFilters;
