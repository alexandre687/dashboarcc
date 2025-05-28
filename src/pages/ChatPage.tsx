import React from "react";
import PatientRequestCard from "../components/chat/PatientRequestCard";
import NegotiationChat from "../components/chat/NegotiationChat";
import ProposalActions from "../components/chat/ProposalActions";

const ChatPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6 flex flex-col flex-grow">
        <div className="flex flex-col gap-4 max-w-3xl mx-auto w-full">
          <PatientRequestCard />
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4 bg-gradient-to-r from-cuidados-dark-green to-cuidados-light-green text-white">
              <h2 className="font-semibold">Conversa com o Familiar</h2>
            </div>
            <NegotiationChat />
            <ProposalActions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
