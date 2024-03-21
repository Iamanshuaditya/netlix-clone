import { BaseInput } from "@/components/ui/input";
import { Button } from "../ui/button";

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSend: () => void;
}

const Input: React.FC<InputProps> = ({ value, onChange, onSend }) => {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <div className="input-container text-white flex relative   ">
      <BaseInput
        disabled
        type="text"
        placeholder="Type a message..."
        value={value}
        onChange={onChange}
        onKeyPress={handleKeyPress}
        className="bg-[#212121]"
      />
      <Button
        type="button"
        onClick={onSend}
        className="bg-[#00000099] text-white hover:bg-white hover:text-[#00000099] "
      >
        Send
      </Button>{" "}
    </div>
  );
};

export default Input;
