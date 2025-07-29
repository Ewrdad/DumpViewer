import React from "react";

export const GlobalExcludeField = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="p-2 border rounded bg-gray-100">
      <h3>Global Exclude</h3>
      <p>This is a dummy field for Global Exclude.</p>
    </div>
  );
};
