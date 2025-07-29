import React from "react";

export const FileField = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="p-2 border rounded bg-gray-100">
      <h3>File</h3>
      <p>This is a dummy field for File.</p>
    </div>
  );
};
