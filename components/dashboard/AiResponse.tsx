import { BrainCircuit } from "lucide-react";
import React from "react";
interface AiResponseProps {
  children: React.ReactNode;
}

const AiResponse = ({ children }: AiResponseProps) => {
  return (
    <div className="p-2 mb-10 ml-20 rounded-xl mr-7 bg-secondary relative">
      {children}
      <div className="w-10 h-10 bg-sky-500 rounded-lg flex justify-center items-center absolute -left-12 bottom-1">
        <BrainCircuit color="white" size={32} />
      </div>
    </div>
  );
};

export default AiResponse;
