import React from "react";
import { Link } from "react-router-dom";

const ConfirmationPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="cc-card max-w-md w-full text-center">
        <div className="rounded-full bg-cc-light-green w-20 h-20 flex items-center justify-center mx-auto mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-10 h-10 text-white"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-cc-dark-green mb-4">
          Cadastro Recebido!
        </h1>

        <p className="text-gray-700 mb-6">
          Agradecemos pelo seu cadastro. Nossa equipe irá analisar sua
          solicitação e encontrar os melhores cuidadores compatíveis com sua
          necessidade. Entraremos em contato em breve.
        </p>

        <div className="space-y-4">
          <p className="text-sm text-gray-500">
            Um e-mail de confirmação foi enviado para o endereço cadastrado.
          </p>

          <div className="border-t border-gray-200 pt-4">
            <Link to="/dashboard" className="cc-btn inline-block">
              Voltar ao Início
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
