// @ts-nocheck

import React, { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { allOptions } from "../Options";

/**
 * MARK: TopBar
 * @param {object} props
 * @param {object} props.whatIsVisible - Object containing visibility states for various UI elements
 * @param {function} props.setWhatIsVisible - Function to update the visibility states
 */
// @ts-ignore
export const TopBar = ({ whatIsVisible, setWhatIsVisible }) => {
  // Option groups
  const appGroupOptions = [allOptions[0], allOptions[1], allOptions[2]];
  const dataGroupOptions = [allOptions[3], allOptions[4], allOptions[5], allOptions[6]];
  const columnGroupOptions = [allOptions[7], allOptions[8], allOptions[9], allOptions[10]];

  // Local state for toggles
  const [appGroupValue, setAppGroupValue] = useState(appGroupOptions.filter(opt => whatIsVisible[opt]));
  const [dataGroupValue, setDataGroupValue] = useState(dataGroupOptions.filter(opt => whatIsVisible[opt]));
  const [columnGroupValue, setColumnGroupValue] = useState(columnGroupOptions.filter(opt => whatIsVisible[opt]));

  // Helper to update visibility
  const updateOptionsVisibility = (newValue, groupOptions) => {
    groupOptions.forEach((groupOption) => {
      setWhatIsVisible((prev) => ({
        ...prev,
        [groupOption]: newValue.includes(groupOption),
      }));
    });
  };

  // Minimal sticky header with toggles
  return (
    <header className="sticky top-0 z-30 w-full bg-white/90 backdrop-blur border-b border-slate-100 shadow-sm">
      <div className="flex flex-col px-0 py-1">
        {/* Row 1: Title and author */}
        <div className="flex items-center gap-3 h-10">
          <span className="text-lg font-bold tracking-tight text-slate-800">DumpViewer</span>
          <span className="text-xs text-slate-500 font-mono bg-slate-100 rounded px-2 py-0.5">v0.2</span>
          <a href="http://ewrdad.github.io" className="text-xs text-slate-500 hover:text-blue-600 transition-colors ml-2">by Ewrdad</a>
        </div>
        {/* Row 2: Controls */}
        <div className="flex flex-row flex-wrap items-center gap-3 mt-1 pl-0 justify-start">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded transition-colors"
            onClick={() => {
              setAppGroupValue(appGroupOptions);
              setDataGroupValue(dataGroupOptions);
              setColumnGroupValue(columnGroupOptions);
              [...appGroupOptions, ...dataGroupOptions, ...columnGroupOptions].forEach(opt => {
                setWhatIsVisible(prev => ({ ...prev, [opt]: true }));
              });
            }}
          >
            Select All
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white text-xs font-medium px-2 py-1 rounded transition-colors"
            onClick={() => {
              setAppGroupValue([]);
              setDataGroupValue([]);
              setColumnGroupValue([]);
              [...appGroupOptions, ...dataGroupOptions, ...columnGroupOptions].forEach(opt => {
                setWhatIsVisible(prev => ({ ...prev, [opt]: false }));
              });
            }}
          >
            Deselect All
          </button>
          {/* App Options */}
          <div className="flex items-center gap-1">
            <span className="text-xs text-slate-700 font-semibold min-w-[44px]">App:</span>
            <ToggleGroup
              type="multiple"
              value={appGroupValue}
              onValueChange={(value) => {
                setAppGroupValue(value);
                updateOptionsVisibility(value, appGroupOptions);
              }}
              variant="outline"
            >
              <ToggleGroupItem value={appGroupOptions[0]}>Tutorial</ToggleGroupItem>
              <ToggleGroupItem value={appGroupOptions[1]}>Accesibility</ToggleGroupItem>
              <ToggleGroupItem value={appGroupOptions[2]}>File</ToggleGroupItem>
            </ToggleGroup>
          </div>
          {/* Data Options */}
          <div className="flex items-center gap-1">
            <span className="text-xs text-slate-700 font-semibold min-w-[44px]">Data:</span>
            <ToggleGroup
              type="multiple"
              value={dataGroupValue}
              onValueChange={(value) => {
                setDataGroupValue(value);
                updateOptionsVisibility(value, dataGroupOptions);
              }}
              variant="outline"
            >
              <ToggleGroupItem value={dataGroupOptions[0]}>Row</ToggleGroupItem>
              <ToggleGroupItem value={dataGroupOptions[1]}>Column</ToggleGroupItem>
              <ToggleGroupItem value={dataGroupOptions[2]}>Exclude</ToggleGroupItem>
              <ToggleGroupItem value={dataGroupOptions[3]}>Highlight</ToggleGroupItem>
            </ToggleGroup>
          </div>
          {/* Column Options */}
          <div className="flex items-center gap-1">
            <span className="text-xs text-slate-700 font-semibold min-w-[44px]">Column:</span>
            <ToggleGroup
              type="multiple"
              value={columnGroupValue}
              onValueChange={(value) => {
                setColumnGroupValue(value);
                updateOptionsVisibility(value, columnGroupOptions);
              }}
              variant="outline"
            >
              <ToggleGroupItem value={columnGroupOptions[0]}>General</ToggleGroupItem>
              <ToggleGroupItem value={columnGroupOptions[1]}>Visibility</ToggleGroupItem>
              <ToggleGroupItem value={columnGroupOptions[2]}>Exclude</ToggleGroupItem>
              <ToggleGroupItem value={columnGroupOptions[3]}>Highlight</ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
      </div>
    </header>
  );
};
