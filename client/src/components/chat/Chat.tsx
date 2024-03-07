import { useState } from "react";
import Input from "./Input";
import {
  GoogleGenerativeAI,
  HarmBlockThreshold,
  HarmCategory,
} from "@google/generative-ai";
import Message from "./Message";

interface ChatProps {
  apiKey: string;
  modelName: string;
}

interface Message {
  role: string;
  parts: { text: string }[];
}

const Chat: React.FC<ChatProps> = ({ apiKey, modelName }) => {
  const [conversation, setConversation] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState("");

  const handleSendMessage = async () => {
    if (!userInput) return;

    setConversation([
      ...conversation,
      { role: "me", parts: [{ text: userInput }] },
    ]);

    setUserInput("");

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: modelName });

    const generationConfig = {
      temperature: 0.5,
      topK: 1,
      topP: 1,
      maxOutputTokens: 2048,
    };

    const safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
    ];

    const history = conversation.map((message) => ({
      role: message.role,
      parts: message.parts.map((part) => ({ text: part.text })),
    }));

    const chat = model.startChat({
      generationConfig,
      safetySettings,
      history,
    });

    const result = await chat.sendMessage(userInput);
    const response = result.response;

    setConversation((prevConversation) => [
      ...prevConversation,
      { role: "netflix-gpt", parts: [{ text: response.text() }] },
    ]);
  };

  return (
    <div className="chat-container text-black px-5">
      <ul
        className="relative text-white text-xs overflow-scroll flex flex-col gap-5"
        style={{ scrollbarWidth: "none" }}
      >
        {conversation.map((message, index) => (
          <Message key={index} message={message} />
        ))}
      </ul>
      <Input
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        onSend={handleSendMessage}
      />
    </div>
  );
};

export default Chat;
