import React from "react";

interface WelcomeScreenProps {
  text?: string;
  backgroundColor?: string;
  textColor?: string;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  text = "Bem vindo",
  backgroundColor = "bg-black",
  textColor = "text-yellow-400",
}) => {
  return (
    <div
      className={`w-screen h-screen flex items-center justify-center ${backgroundColor}`}
    >
      <h1
        className={`text-6xl md:text-8xl font-bold font-sans ${textColor}`}
        style={{ fontFamily: "Roboto, Arial, sans-serif" }}
      >
        {text}
      </h1>
    </div>
  );
};

export default WelcomeScreen;
