import React from "react";
import { Check } from "lucide-react";

interface ChatBubbleProps {
  message: {
    id: string;
    text: string;
    sender: "caregiver" | "family";
    senderName: string;
    timestamp: string;
    read: boolean;
  };
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ message }) => {
  const isCaregiver = message.sender === "caregiver";

  return (
    <div
      className={`flex flex-col ${
        isCaregiver ? "items-end" : "items-start"
      } mb-4`}
    >
      <div
        className={`chat-bubble ${
          isCaregiver ? "chat-bubble-caregiver" : "chat-bubble-family"
        }`}
      >
        <div className="flex flex-col">
          <span className="text-xs font-semibold opacity-80 mb-1">
            {message.senderName}
          </span>
          <p>{message.text}</p>
        </div>
      </div>
      <div
        className={`flex items-center mt-1 text-xs text-gray-500 ${
          isCaregiver ? "mr-1" : "ml-1"
        }`}
      >
        <span>{message.timestamp}</span>
        {isCaregiver && (
          <div className="flex items-center ml-1">
            {message.read ? (
              <Check className="w-3 h-3 text-cuidados-light-green" />
            ) : (
              <Check className="w-3 h-3" />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatBubble;
