import React from "react";
import WelcomeScreen from "./WelcomeScreen";

const HomePage = () => {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black min-h-screen">
      <div
        style={{
          opacity: show ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        <WelcomeScreen />
      </div>
    </div>
  );
};

export default HomePage;
