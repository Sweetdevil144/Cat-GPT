import React from "react";
import {
  CodeBracketIcon,
  LightBulbIcon,
  PencilIcon,
} from "@heroicons/react/24/solid";

type TipProps = {
  icon: React.ReactNode;
  text: string;
};

const TipItem: React.FC<TipProps> = ({ icon, text }) => {
  return (
    <div className="w-1/4 interactive-bg-surface-container-high rounded-lg p-2 border border-outline">
      {icon}
      <div className="text-start my-2">{text}</div>
    </div>
  );
};

const Tips: React.FC = () => {
  const tips: TipProps[] = [
    {
      icon: (
        <CodeBracketIcon className="h-6 w-6 p-1 rounded-full bg-primary-container" />
      ),
      text: "Look up a Linux shell command for a specific task",
    },
    {
      icon: (
        <LightBulbIcon className="h-6 w-6 p-1 rounded-full bg-primary-container" />
      ),
      text: "Brainstorm presentation ideas about a topic",
    },
    {
      icon: (
        <PencilIcon className="h-6 w-6 p-1 rounded-full bg-primary-container" />
      ),
      text: "Write a thank you note to my colleague",
    },
    {
      icon: (
        <PencilIcon className="h-6 w-6 p-1 rounded-full bg-primary-container" />
      ),
      text: "Help me craft a text response to a friend",
    },
  ];

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <span className="mb-4">You can ask Cat-GPT to:</span>
      <div className="flex space-x-4 w-full">
        {tips.map((tip, index) => (
          <TipItem key={index} icon={tip.icon} text={tip.text} />
        ))}
      </div>
    </div>
  );
};

export default Tips;
