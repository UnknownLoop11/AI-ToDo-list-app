import React from "react";

const Tab = ({ label, badgeValue, active, onClick }) => {
  return (
    <div
      role="button"
      onClick={onClick}
      className={`flex gap-x-1.5 text-sm  font-semibold ${
        active ? "text-blue-600 " : "text-gray-400"
      }`}
    >
      {label}
      {badgeValue > 0 && (
        <span
          className={` text-white font-semibold px-2 rounded-3xl ${
            active ? "bg-blue-500" : "bg-gray-500"
          }`}
          style={{ fontSize: "0.6rem" }}
        >
          {badgeValue}
        </span>
      )}
    </div>
  );
};

export default Tab;
