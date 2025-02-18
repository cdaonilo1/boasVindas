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
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: "hidden",
      }}
    >
      <div className="flex flex-col items-center">
        <span style={{ fontSize: "12px", color: "white", marginBottom: "4px" }}>
          1.2
        </span>
        <h1
          className={`text-8xl lg:text-9xl font-bold ${textColor}`}
          style={{
            fontFamily: "Roboto, Arial, sans-serif",
            textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
          }}
        >
          {text}
        </h1>
      </div>
    </div>
  );
};

export default WelcomeScreen;
