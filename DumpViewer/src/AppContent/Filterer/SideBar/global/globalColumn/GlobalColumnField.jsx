import React from "react";

/**
 * @param {Object} props
 * @param {boolean} props.isVisible
 * @param {Object} props.filter
 * @param {Function} props.setFilter
 */
export const GlobalColumnField = ({
  isVisible,
  filter: _filter,
  setFilter: _setFilter,
}) => {
  if (!isVisible) return null;

  return (
    <div className="p-2 border rounded bg-gray-100">
      <h3>Global Column</h3>
      <p>This is a dummy field for Global Column.</p>
    </div>
  );
};
