import { X } from "lucide-react";
import netflixGpt from "../../../public/images/netflixgpt.png";
import Chat from "./Chat";
interface GptProps {
  onclick: () => void;
}

function Gpt({ onclick }: GptProps) {
  return (
    <div className="overflow-scroll" style={{ scrollbarWidth: "none" }}>
      <div className="flex h-full flex-col items-center justify-center text-token-text-primary">
        <div className="relative">
          <div className="mb-3 h-12 w-12">
            <div className="gizmo-shadow-stroke relative flex h-full items-center justify-center rounded-full bg-white text-gray-950">
              <img src={netflixGpt} alt="netflixGpt" className="" />
            </div>
          </div>
        </div>
        <div className="mb-5 text-2xl font-medium w-[95%]">
          <p className="flex justify-center">
            {" "}
            U can ask me questions about this movie...
          </p>
          <Chat
            apiKey="AIzaSyBT1ON5TocFJrU4vU1AxsvWmpj6xbIeouY"
            modelName="gemini-1.0-pro"
          />
        </div>
        <button
          type="button"
          className="absolute right-6 top-[28em]"
          onClick={onclick}
        >
          <X />

          <span className="sr-only">Close</span>
        </button>
      </div>
    </div>
  );
}

export default Gpt;
