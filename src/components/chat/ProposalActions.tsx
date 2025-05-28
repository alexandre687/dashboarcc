import React, { useState } from "react";
import { Check, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ProposalActions: React.FC = () => {
  const { toast } = useToast();
  const [showConfirm, setShowConfirm] = useState(false);
  const [actionType, setActionType] = useState<"accept" | "decline" | null>(
    null
  );

  const handleAction = (type: "accept" | "decline") => {
    setActionType(type);
    setShowConfirm(true);
  };

  const confirmAction = () => {
    if (actionType === "accept") {
      toast({
        title: "Proposta aceita!",
        description:
          "Você aceitou a proposta. Agora vocês podem combinar os detalhes finais.",
      });
    } else {
      toast({
        title: "Proposta recusada",
        description:
          "Você recusou a proposta. Você pode continuar a negociação ou encerrar a conversa.",
        variant: "destructive",
      });
    }

    setShowConfirm(false);
  };

  const cancelAction = () => {
    setShowConfirm(false);
  };

  return (
    <div className="border-t border-gray-100 p-4">
      {!showConfirm ? (
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => handleAction("accept")}
            className="action-button bg-cuidados-light-green text-white hover:bg-opacity-90 flex-1 animate-fade-in"
          >
            <Check className="w-5 h-5 mr-1" /> Aceitar Proposta
          </button>
          <button
            onClick={() => handleAction("decline")}
            className="action-button border border-gray-200 text-gray-700 hover:bg-gray-50 flex-1 animate-fade-in"
          >
            <X className="w-5 h-5 mr-1" /> Recusar Proposta
          </button>
        </div>
      ) : (
        <div className="animate-fade-in">
          <p className="text-center mb-3 font-medium">
            {actionType === "accept"
              ? "Tem certeza que deseja aceitar esta proposta?"
              : "Tem certeza que deseja recusar esta proposta?"}
          </p>
          <div className="flex gap-3">
            <button
              onClick={confirmAction}
              className={`action-button flex-1 ${
                actionType === "accept"
                  ? "bg-cuidados-light-green text-white"
                  : "bg-red-500 text-white"
              }`}
            >
              Confirmar
            </button>
            <button
              onClick={cancelAction}
              className="action-button border border-gray-200 text-gray-700 hover:bg-gray-50 flex-1"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      <div className="mt-4 text-center">
        <button className="text-sm text-cuidados-dark-green font-medium underline">
          Fazer contraproposta
        </button>
      </div>
    </div>
  );
};

export default ProposalActions;
