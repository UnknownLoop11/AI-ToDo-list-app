import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
const Loading = () => {
  return (
    <div className="w-full h-[500px] flex flex-col items-center justify-center text-blue-600 text-sm font-semibold gap-y-1.5">
      <AiOutlineLoading3Quarters
        className="text-blue-600 animate-spin mx-auto"
        size={32}
      />
      Loading...
    </div>
  );
};

export default Loading;
