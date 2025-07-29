import React from "react";

export const TutorialField = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="p-2 border rounded bg-gray-100">
      <h3>Tutorial</h3>
      <p>This is a dummy field for Tutorial.</p>
    </div>
  );
};
