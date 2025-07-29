import path from "path";
console.log(
  "Resolved path:",
  path.resolve("../../components/ui/toggle-group.jsx")
);

import {
  ToggleGroup,
  ToggleGroupItem,
} from "../components/ui/toggle-group.jsx";
import { Badge } from "@/components/ui/badge";
import React, { useEffect, useState } from "react";
import { Viewer } from "./Viewer/Viewer";
import { Filterer } from "./Filterer/Filterer";
import { Filter } from "./FilterType";
/**
 * MARK: Main component
 * @description This is the main component of the application, Mainly in charge of initial page structure and global state.
 */
export const Main = () => {
  /**
   * @description State object for managing filter settings in the data viewer.
   * @type {[Filter, Function]} filter - State and setter for filter configuration.
   */
  const [filter, setFilter] = useState({
    segementedBy: "/n",
    columns: {
      useCharCount: false,
      customChar: "/s",
    },
    exclude: {
      regex: null,
      lines: { before: undefined, after: undefined, list: [] },
    },
    highlight: {
      regex: null,
      lines: { before: undefined, after: undefined, list: [] },
    },
    sections: [
      {
        name: "Default",
        isVisible: true,
        length: "all",
        viualWidth: 100,
        exclude: {
          regex: null,
        },
        highlight: {
          regex: null,
        },
      },
    ],
  });

  /**
   * Mark: Accessibility state
   *
   */
  const [accessibilityOptions, setAccessibilityOptions] = useState({
    colourOveride: {
      primary: "#000000",
      secondary: "#ffffff",
    },
    fontSize: 10,
  });

  /**
   * Mark: Data state
   */
  const [data, setData] = useState(null);
  const clearData = () => {
    setData(null);
    window.localStorage.removeItem("dumpViewerData");
  };

  useEffect(() => {
    const localStorageData = window.localStorage.getItem("dumpViewerData");
    if (localStorageData) {
      setData(localStorageData);
    }
  }, []);

  return (
    <>
      <Filterer filter={filter} setFilter={setFilter} clearData={clearData} />
      <Viewer data={data} setData={setData} />
    </>
  );
};
