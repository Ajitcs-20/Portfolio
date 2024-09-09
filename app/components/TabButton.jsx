import React from "react";


const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ selectTab, active, children }) => {
  return (
    <button
      onClick={selectTab}
      className={`px-4 py-2 mr-4 text-gray-600 hover:text-sky-700 ${
        active ? "active-tab" : ""
      }`}
    >
      {children}
    </button>
  );
};


export default TabButton;