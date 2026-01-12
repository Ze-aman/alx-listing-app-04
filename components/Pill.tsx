import React from "react";
import { PillProps } from "@/interfaces";

const Pill: React.FC<PillProps> = ({ label, isActive }) => {
  const activeClasses = isActive
    ? "bg-indigo-600 text-white"
    : "bg-gray-100 text-gray-700 hover:bg-gray-200";

  return (
    <button
      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 whitespace-nowrap ${activeClasses}`}
    >
      {label}
    </button>
  );
};

export default Pill;