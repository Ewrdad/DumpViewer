import { useState } from "react";
import { Sidebar } from "./SideBar/Sidebar";
import { Filter } from "../FilterType";
import React from "react";
import { TopBar } from "./TopBar/TopBar";
import { allOptions } from "./Options";

/**
 * Mark: Filterer
 * @description controls all filtering options for the dump viewer.
 * @param {Object} props - The properties for the Filterer component.
 * @param {Filter} props.filter - Used to check current filter settings
 * @param {Function} props.setFilter - Function to update the filter settings
 * @param {Function} props.clearData - Function to clear the data in the viewer
 * @returns
 */
export const Filterer = ({ filter, setFilter, clearData }) => {
  /**
   * MARK: Is visible state
   */
  const [whatIsVisible, setWhatIsVisible] = useState({
    [allOptions[0]]: true,
    [allOptions[1]]: true,
  });

  return (
    <>
      <TopBar
        whatIsVisible={whatIsVisible}
        setWhatIsVisible={setWhatIsVisible}
      />
      <Sidebar
        filter={filter}
        setFilter={setFilter}
        whatIsVisible={whatIsVisible}
        clearData={clearData}
      />
    </>
  );
};
