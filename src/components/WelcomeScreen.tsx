import React from "react";

interface WelcomeScreenProps {
  text?: string;
  backgroundColor?: string;
  textColor?: string;
}

import { useEffect, useState } from "react";

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  text = "Bem vindo",
  backgroundColor = "bg-black",
  textColor = "text-yellow-400",
}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`w-screen h-screen flex items-center justify-center ${backgroundColor}`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: "hidden",
      }}
    >
      <div
        className="flex flex-col items-center"
        style={{
          opacity: show ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        <input
          type="number"
          step="0.00001"
          placeholder="0.00000"
          className="text-5xl bg-transparent border-2 border-gray-600 rounded-lg text-white px-4 py-3 mb-8 w-72 text-center focus:outline-none focus:border-gray-400"
        />
        <span className="text-xs text-white mb-1">1.2</span>
        <img src="/vite.svg" alt="Logo" className="w-48 h-48 object-contain" />
      </div>
    </div>
  );
};

export default WelcomeScreen;
