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

 *
 * @returns
 */
export const Sidebar = ({ filter, setFilter, whatIsVisible }) => {
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
      {/* Reset Data button moved to FileField */}
      {/* MARK: App Options */}
      <AccesibilityField isVisible={whatIsVisible.Accesibility} />
      <TutorialField isVisible={whatIsVisible.Tutorial} />
      <FileField isVisible={whatIsVisible.File} />

      {/* MARK: Data Options */}
      <GlobalRowField isVisible={whatIsVisible.globalRow} />
      <GlobalColumnField isVisible={whatIsVisible.globalColumn} />
      <GlobalExcludeField isVisible={whatIsVisible.globalExclude} />
      <GlobalHighlightField isVisible={whatIsVisible.globalHighlight} />

      {/* MARK: Column Options */}
      <ColumnGeneralField isVisible={whatIsVisible.columnGeneral} />
      <ColumnVisibilityField isVisible={whatIsVisible.columnVisibility} />
      <ColumnExcludeField isVisible={whatIsVisible.columnExclude} />
      <ColumnHighlightField isVisible={whatIsVisible.columnHighlight} />
    </div>
  );
};
