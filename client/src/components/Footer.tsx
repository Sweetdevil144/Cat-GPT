// components/Footer.tsx
import React, { useState } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

type FooterProps = {
  input: string;
  setInput: (value: string) => void;
  handleSend: () => void;
};

const Footer: React.FC<FooterProps> = ({ input, setInput, handleSend }) => {
  const [inputRows, setInputRows] = useState(1);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    setInputRows(e.target.value.split("\n").length);
  };

  return (
    <footer className="m-2 flex items-center rounded-lg bg-surface-container-highest">
      <textarea
        className="flex-1 p-2 mx-2 focus:outline-none bg-surface-container-highest text-lg resize-none overflow-y-auto max-h-24"
        placeholder="Chat with Cat-GPT..."
        value={input}
        onChange={handleInput}
        rows={inputRows}
      />
      <button
        className="p-2 m-2 rounded-lg interactive-bg-primary-container"
        onClick={handleSend}
        title="Send Message"
      >
        <PaperAirplaneIcon className="h-6 w-6" />
      </button>
    </footer>
  );
};

export default Footer;
