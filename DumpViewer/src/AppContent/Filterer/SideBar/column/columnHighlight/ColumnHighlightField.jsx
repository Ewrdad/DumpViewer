import React from "react";

export const ColumnHighlightField = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="p-2 border rounded bg-gray-100">
      <h3>Column Highlight</h3>
      <p>This is a dummy field for Column Highlight.</p>
    </div>
  );
};
