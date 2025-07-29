import React from "react";

export const ColumnExcludeField = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="p-2 border rounded bg-gray-100">
      <h3>Column Exclude</h3>
      <p>This is a dummy field for Column Exclude.</p>
    </div>
  );
};
