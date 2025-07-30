import { Button } from "@/components/ui/button";
import React from "react";
import { AccesibilityField } from "./Accesibility/AccesibilityField";
import { TutorialField } from "./Tutorial/TutorialField";
import { FileField } from "./File/FileField";
import { ColumnGeneralField } from "./column/columnGeneral/ColumnGeneralField";
import { ColumnVisibilityField } from "./column/columnVisibility/ColumnVisibilityField";
import { ColumnExcludeField } from "./column/columnExclude/ColumnExcludeField";
import { ColumnHighlightField } from "./column/columnHighlight/ColumnHighlightField";
import { GlobalRowField } from "./global/globalRow/GlobalRowField";
import { GlobalColumnField } from "./global/globalColumn/GlobalColumnField";
import { GlobalExcludeField } from "./global/globalExclude/GlobalExcludeField";
import { GlobalHighlightField } from "./global/globalHighlight/GlobalHighlightField";
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
    <div className="fixed top-0 right-0 h-screen w-64 bg-gray-100 p-4 shadow-lg overflow-y-auto max-h-screen">
      <h2 className="text-lg font-bold mb-4">Sidebar</h2>
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
      {/* MARK: Accesibility Section */}
      <AccesibilityField isVisible={whatIsVisible.Accesibility} />
      {/* MARK: Tutorial Section */}
      <TutorialField isVisible={whatIsVisible.Tutorial} />
      {/* MARK: File Section */}
      <FileField isVisible={whatIsVisible.File} />
      {/* MARK: Global Row Section */}
      <GlobalRowField isVisible={whatIsVisible.globalRow} />
      {/* MARK: Global Column Section */}
      <GlobalColumnField isVisible={whatIsVisible.globalColumn} />
      {/* MARK: Global Exclude Section */}
      <GlobalExcludeField isVisible={whatIsVisible.globalExclude} />
      {/* MARK: Global Highlight Section */}
      <GlobalHighlightField isVisible={whatIsVisible.globalHighlight} />
      {/* MARK: Column General Section */}
      <ColumnGeneralField isVisible={whatIsVisible.columnGeneral} />
      {/* MARK: Column Visibility Section */}
      <ColumnVisibilityField isVisible={whatIsVisible.columnVisibility} />
      {/* MARK: Column Exclude Section */}
      <ColumnExcludeField isVisible={whatIsVisible.columnExclude} />
      {/* MARK: Column Highlight Section */}
      <ColumnHighlightField isVisible={whatIsVisible.columnHighlight} />
    </div>
  );
};
