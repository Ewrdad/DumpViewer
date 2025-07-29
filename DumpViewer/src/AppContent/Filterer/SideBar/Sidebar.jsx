import { Button } from "@/components/ui/button";
import React from "react";
/**
 * @typedef {import('../../FilterType').Filter} Filter
 */

/**
 * Mark: Sidebar
 * @param {Object} props - The properties for the Sidebar component.
 * @param {Filter} props.filter - Used to check current filter settings.
 * @param {Function} props.setFilter - Function to update the filter settings.
 * @param {Object} props.whatIsVisible - Object containing what is visible on the sidebar
 * @param {Function} props.clearData - Function to clear the data in the viewer.
 *
 * @returns
 */
export const Sidebar = ({ filter, setFilter, whatIsVisible, clearData }) => {
  /**
   * MARK: isWhatIsVisibleAllFalse
   * @description Checks if all properties in whatIsVisible are false, in order to display a empty state message.
   * @returns {boolean} - Returns true if all properties are false, otherwise false.
   * @example isWhatIsVisibleAllFalse();
   */
  const isWhatIsVisibleAllFalse = () => {
    return Object.values(whatIsVisible).every((value) => value === false);
  };

  if (isWhatIsVisibleAllFalse()) {
    return null;
  }

  return (
    <div className="fixed top-0 right-0 h-screen w-64 bg-gray-100 p-4 shadow-lg">
      {whatIsVisible.File && (
        <Button
          onMouseDown={() => clearData()}
          className="w-full"
          variant="destructive"
          aria-label="Reset Data Being Viewed"
        >
          Reset Data
        </Button>
      )}
    </div>
  );
};
