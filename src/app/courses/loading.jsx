import React from "react";
import { RingLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 h-screen">
      <RingLoader color="#2e3c8f" size={100} />
      <p>loading...</p>
    </div>
  );
};

export default Loading;
