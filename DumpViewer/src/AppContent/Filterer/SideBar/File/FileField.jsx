import React from "react";
import { Button } from "@/components/ui/button";

/**
 * FileField component for file-related sidebar actions.
 * @param {Object} props
 * @param {boolean} props.isVisible - Whether the file section is visible.
 * (Reset Data button is always shown; no clearData prop required)
 * @returns {React.ReactElement|null}
 * @example <FileField isVisible={true} clearData={() => {}} />
 */
export const FileField = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="p-2 border rounded bg-gray-100">
      <h3>File</h3>
      <p>This is a dummy field for File.</p>
      <Button
        onMouseDown={() => {
          /* TODO: implement reset data handler */
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
