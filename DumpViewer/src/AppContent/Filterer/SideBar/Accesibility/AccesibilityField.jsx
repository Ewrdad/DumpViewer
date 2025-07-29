import React from "react";

export const AccesibilityField = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="p-2 border rounded bg-gray-100">
      <h3>Accesibility</h3>
      <p>This is a dummy field for Accesibility.</p>
    </div>
  );
};
