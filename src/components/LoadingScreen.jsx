import React from "react";
import "../styles/loadingScreen.css";

const LoadingScreen = () => {
  return (
    <div className="center">
      <div className="ring"> </div>
      <span>loading...</span>
    </div>
  );
};

export default LoadingScreen;
