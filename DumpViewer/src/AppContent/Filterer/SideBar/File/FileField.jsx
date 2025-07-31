import React from "react";
import { Button } from "@/components/ui/button";

/**
 * FileField component for file-related sidebar actions.
 * @param {Object} props
 * @param {boolean} props.isVisible - Whether the file section is visible.
 * @param {Object} props.filter
 * @param {Function} props.setFilter
 * @param {Function} [props.clearData] - Function to clear the data in the viewer (optional)
 * @returns {React.ReactElement|null}
 * @example <FileField isVisible={true} filter={{}} setFilter={()=>{}} clearData={()=>{}} />
 */
export const FileField = ({ isVisible, filter, setFilter, clearData }) => {
  if (!isVisible) return null;

  return (
    <div className="p-2 border rounded bg-gray-100">
      <h3>File</h3>
      <p>This is a dummy field for File.</p>
      <Button
        onMouseDown={() => {
          if (typeof clearData === "function") clearData();
        }}
        className="w-full mt-2"
        variant="destructive"
        size="default"
        aria-label="Reset Data Being Viewed"
      >
        Reset Data
      </Button>
    </div>
  );
};
