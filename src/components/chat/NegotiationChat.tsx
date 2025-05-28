import React, { useState, useRef, useEffect } from "react";
import ChatBubble from "./ChatBubble";
import { Send } from "lucide-react";

// Mock data for messages
const initialMessages = [
  {
    id: "1",
    text: "Olá! Vi seu interesse no cuidado da minha mãe. Pode me contar um pouco sobre sua experiência com pacientes idosos?",
    sender: "family",
    senderName: "João (Familiar)",
    timestamp: "10:30",
    read: true,
  },
  {
    id: "2",
    text: "Olá João! Claro, trabalho há 5 anos com idosos, principalmente pós-operatórios e acompanhamento hospitalar. Tenho especialização em cuidados geriátricos.",
    sender: "caregiver",
    senderName: "Ana (Cuidadora)",
    timestamp: "10:32",
    read: true,
  },
  {
    id: "3",
    text: "Que ótimo! O valor proposto está dentro do seu esperado? Precisamos de alguém o mais rápido possível.",
    sender: "family",
    senderName: "João (Familiar)",
    timestamp: "10:35",
    read: true,
  },
  {
    id: "4",
    text: "Sim, o valor está adequado para o serviço. Posso iniciar já na próxima semana, se necessário. Há alguma necessidade específica que preciso saber?",
    sender: "caregiver",
    senderName: "Ana (Cuidadora)",
    timestamp: "10:36",
    read: true,
  },
];

const NegotiationChat: React.FC = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState("");
  const [sending, setSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    // Set sending state to true to show loading
    setSending(true);

    // Simulate network delay
    setTimeout(() => {
      const message = {
        id: Date.now().toString(),
        text: newMessage,
        sender: "caregiver" as "caregiver" | "family",
        senderName: "Ana (Cuidadora)",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        read: false,
      };

      setMessages([...messages, message]);
      setNewMessage("");
      setSending(false);

      // Simulate message being read after 2 seconds
      setTimeout(() => {
        setMessages((msgs) =>
          msgs.map((msg) =>
            msg.id === message.id ? { ...msg, read: true } : msg
          )
        );
      }, 2000);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-[500px] md:h-[600px]">
      <div className="flex-grow overflow-y-auto p-4">
        <div className="space-y-1">
          {messages.map((message: any) => (
            <ChatBubble key={message.id} message={message} />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="border-t p-3 bg-gray-50">
        <div className="relative flex items-center">
          <textarea
            className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
            placeholder="Digite sua mensagem..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={handleKeyPress}
            rows={1}
            disabled={sending}
          />
          <button
            className={`ml-2 p-2 rounded-full ${
              sending
                ? "bg-gray-200"
                : "bg-cuidados-light-green text-white hover:bg-opacity-90"
            } transition-all duration-200`}
            onClick={handleSendMessage}
            disabled={sending || !newMessage.trim()}
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
        {sending && (
          <p className="text-xs text-gray-500 mt-1 animate-pulse">
            Enviando mensagem...
          </p>
        )}
      </div>
    </div>
  );
};

export default NegotiationChat;
