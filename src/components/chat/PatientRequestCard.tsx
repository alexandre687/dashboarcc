import React from "react";
import { Calendar, Clock } from "lucide-react";

// Mock data for patient request
const patientRequest = {
  patientName: "Maria Silva",
  age: 78,
  careType: "Acompanhamento Hospitalar",
  shift: "Noturno - 8 horas",
  location: "Hospital Santa Casa - Centro",
  status: "Em negociação",
  proposedValue: "R$ 120,00/dia",
  startDate: "15/06/2025",
};

const PatientRequestCard: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 border-b border-gray-100">
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-semibold text-lg text-cuidados-dark-green">
            Detalhes do Serviço
          </h2>
          <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-medium">
            {patientRequest.status}
          </span>
        </div>
        <h3 className="font-medium text-gray-900">
          Paciente: {patientRequest.patientName}, {patientRequest.age} anos
        </h3>
      </div>

      <div className="p-4 space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-cuidados-light-green bg-opacity-15 flex items-center justify-center">
              <Clock className="text-cuidados-light-green w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Tipo de Cuidado</p>
              <p className="font-medium">{patientRequest.careType}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-cuidados-light-green bg-opacity-15 flex items-center justify-center">
              <Clock className="text-cuidados-light-green w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Turno</p>
              <p className="font-medium">{patientRequest.shift}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-cuidados-light-green bg-opacity-15 flex items-center justify-center">
              <Calendar className="text-cuidados-light-green w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Data de Início</p>
              <p className="font-medium">{patientRequest.startDate}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-cuidados-light-green bg-opacity-15 flex items-center justify-center">
              <Calendar className="text-cuidados-light-green w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Local</p>
              <p className="font-medium">{patientRequest.location}</p>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">Valor Proposto:</span>
            <span className="text-lg font-semibold text-cuidados-dark-green">
              {patientRequest.proposedValue}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientRequestCard;
