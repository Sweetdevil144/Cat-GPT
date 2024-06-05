import React from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

type FooterProps = {
  input: string;
  setInput: (value: string) => void;
  handleSend: () => void;
};

const Footer: React.FC<FooterProps> = ({ input, setInput, handleSend }) => {
  return (
    <footer className="m-2 flex items-center rounded-lg bg-surface-container-highest">
      <input
        type="text"
        className="flex-1 p-2 mx-2 focus:outline-none bg-surface-container-highest h-full text-lg"
        placeholder="Chat with Cat-GPT..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="p-2 m-2 rounded-lg interactive-bg-primary-container"
        onClick={handleSend}
      >
        <PaperAirplaneIcon className="h-6 w-6" />
      </button>
    </footer>
  );
};

export default Footer;
