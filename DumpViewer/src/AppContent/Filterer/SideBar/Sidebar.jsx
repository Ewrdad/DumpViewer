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
 * @param {Function} [props.clearData] - Function to clear the data in the viewer (optional, for FileField)

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

  // Helper to check if any in a group are visible
  const isAnyVisible = (keys) => keys.some((k) => whatIsVisible[k]);

  return (
    <div className="fixed top-0 right-0 h-screen w-64 bg-gray-100 p-4 shadow-lg overflow-y-auto max-h-screen z-50">
      <h2 className="text-lg font-bold mb-4">Sidebar</h2>

      {/* MARK: App Options */}
      {isAnyVisible(["Accesibility", "Tutorial", "File"]) && (
        <div className="mb-4 border border-gray-300 rounded-lg p-3">
          <h3 className="font-semibold text-base mb-2 border-b border-gray-200 pb-1">
            App Options
          </h3>
          <AccesibilityField
            isVisible={whatIsVisible.Accesibility}
            filter={filter}
            setFilter={setFilter}
          />
          <TutorialField
            isVisible={whatIsVisible.Tutorial}
            filter={filter}
            setFilter={setFilter}
          />
          <FileField
            isVisible={whatIsVisible.File}
            filter={filter}
            setFilter={setFilter}
            clearData={typeof clearData !== "undefined" ? clearData : undefined}
          />
        </div>
      )}

      {/* MARK: Data Options */}
      {isAnyVisible([
        "globalRow",
        "globalColumn",
        "globalExclude",
        "globalHighlight",
      ]) && (
        <div className="mb-4 border border-gray-300 rounded-lg p-3">
          <h3 className="font-semibold text-base mb-2 border-b border-gray-200 pb-1">
            Data Options
          </h3>
          <GlobalRowField
            isVisible={whatIsVisible.globalRow}
            filter={filter}
            setFilter={setFilter}
          />
          <GlobalColumnField
            isVisible={whatIsVisible.globalColumn}
            filter={filter}
            setFilter={setFilter}
          />
          <GlobalExcludeField
            isVisible={whatIsVisible.globalExclude}
            filter={filter}
            setFilter={setFilter}
          />
          <GlobalHighlightField
            isVisible={whatIsVisible.globalHighlight}
            filter={filter}
            setFilter={setFilter}
          />
        </div>
      )}

      {/* MARK: Column Options */}
      {isAnyVisible([
        "columnGeneral",
        "columnVisibility",
        "columnExclude",
        "columnHighlight",
      ]) && (
        <div className="mb-4 border border-gray-300 rounded-lg p-3">
          <h3 className="font-semibold text-base mb-2 border-b border-gray-200 pb-1">
            Column Options
          </h3>
          <ColumnGeneralField
            isVisible={whatIsVisible.columnGeneral}
            filter={filter}
            setFilter={setFilter}
          />
          <ColumnVisibilityField
            isVisible={whatIsVisible.columnVisibility}
            filter={filter}
            setFilter={setFilter}
          />
          <ColumnExcludeField
            isVisible={whatIsVisible.columnExclude}
            filter={filter}
            setFilter={setFilter}
          />
          <ColumnHighlightField
            isVisible={whatIsVisible.columnHighlight}
            filter={filter}
            setFilter={setFilter}
          />
        </div>
      )}
    </div>
  );
};
