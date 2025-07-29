import React from "react";

export const GlobalRowField = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="p-2 border rounded bg-gray-100">
      <h3>Global Row</h3>
      <p>This is a dummy field for Global Row.</p>
    </div>
  );
};
