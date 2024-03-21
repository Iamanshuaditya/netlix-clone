import { CircleUser } from "lucide-react";
import netflixGpt from "../../images/netflixgpt.png";

interface MessageProps {
  message: { role: string; parts: { text: string }[] };
}

const Message: React.FC<MessageProps> = ({ message }) => {
  return (
    <div>
      <p className="text-base flex gap-2">
        {message.role == "me" ? (
          <div className="   ">
            <CircleUser size={20} />{" "}
          </div>
        ) : (
          <>
            <img
              src={netflixGpt}
              alt=""
              className="w-4 object-contain rounded-3xl "
            />{" "}
          </>
        )}
        {message.role}
      </p>

      <li>
        {message.parts.map((part) => (
          <span key={part.text}>{part.text}</span>
        ))}
      </li>
    </div>
  );
};

export default Message;
