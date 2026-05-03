import React from "react";
import { RingLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <RingLoader color="#2e3c8f" size={150} />
    </div>
  );
};

export default Loading;
