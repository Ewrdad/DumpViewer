import React from "react";

export const GlobalColumnField = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="p-2 border rounded bg-gray-100">
      <h3>Global Column</h3>
      <p>This is a dummy field for Global Column.</p>
    </div>
  );
};
