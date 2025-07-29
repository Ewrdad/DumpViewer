// @ts-nocheck

import { Badge } from "@/components/ui/badge";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import React, { useEffect, useState, useRef } from "react";
import { allOptions } from "../Options";

/**
 * MARK: TopBar
 * @param {object} props
 * @param {object} props.whatIsVisible - Object containing visibility states for various UI elements
 * @param {function} props.setWhatIsVisible - Function to update the visibility states
 */
// @ts-ignore
export const TopBar = ({ whatIsVisible, setWhatIsVisible }) => {
  //#region State and Refs
  const [appGroupValue, setAppGroupValue] = useState([
    allOptions[0],
    allOptions[1],
  ]);
  const [dataGroupValue, setDataGroupValue] = useState([]);
  const [columnGroupValue, setColumnGroupValue] = useState([]);
  const appGroup = useRef();
  //#endregion

  //#region Options Groups
  const appGroupOptions = [allOptions[0], allOptions[1], allOptions[2]];
  const dataGroupOptions = [
    allOptions[3],
    allOptions[4],
    allOptions[5],
    allOptions[6],
  ];
  const columnGroupOptions = [
    allOptions[7],
    allOptions[8],
    allOptions[9],
    allOptions[10],
  ];
  //#endregion

  //#region Helper Functions
  const updateOptionsVisibility = (newValue, groupOptions) => {
    groupOptions.forEach((groupOption) => {
      if (newValue.includes(groupOption)) {
        setWhatIsVisible((prev) => ({
          ...prev,
          [groupOption]: true,
        }));
      } else {
        setWhatIsVisible((prev) => ({
          ...prev,
          [groupOption]: false,
        }));
      }
    });
  };
  //#endregion

  //#region Effects
  useEffect(() => {
    console.log("whatIsVisible", whatIsVisible);
  }, [whatIsVisible]);
  //#endregion

  //#region Render
  return (
    <>
      {/* MARK: Header */}
      <div className="w-screen bg-slate-600 inline-flex p-2">
        <h1 className="w-fit"> DumpViewer v0.2</h1>
        <a href="http://ewrdad.github.io">
          <Badge className={"ml-5"}>Developed/Hosted by Ewrdad</Badge>
        </a>
      </div>
      {/* MARK: Main Content */}
      <div className="w-screen bg-slate-300 p-2 inline-flex ">
        {/* MARK: App Options */}
        <div className="pr-4">
          App options:
          <ToggleGroup
            type="multiple"
            ref={appGroup}
            value={appGroupValue}
            onValueChange={(value) => {
              setAppGroupValue(value);
              updateOptionsVisibility(value, appGroupOptions);
            }}
            variant={"outline"}
          >
            <ToggleGroupItem value={appGroupOptions[0]} className="w-fit">
              Tutorial
            </ToggleGroupItem>
            <ToggleGroupItem value={appGroupOptions[1]} className="w-fit">
              Accesibility
            </ToggleGroupItem>
            <ToggleGroupItem value={appGroupOptions[2]} className="w-fit">
              File
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        {/* MARK: Data Options */}
        <div className="pr-4">
          Data options:
          <ToggleGroup
            type="multiple"
            value={dataGroupValue}
            onValueChange={(value) => {
              setDataGroupValue(value);
              updateOptionsVisibility(value, dataGroupOptions);
            }}
            variant={"outline"}
          >
            <ToggleGroupItem value={dataGroupOptions[0]} className="w-fit">
              Row
            </ToggleGroupItem>
            <ToggleGroupItem value={dataGroupOptions[1]} className="w-fit">
              Column
            </ToggleGroupItem>
            <ToggleGroupItem value={dataGroupOptions[2]} className="w-fit">
              Exclude
            </ToggleGroupItem>
            <ToggleGroupItem value={dataGroupOptions[3]} className="w-fit">
              Highlight
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        {/* MARK: Column Options */}
        <div className="inline-block">
          Column options:
          <ToggleGroup
            type="multiple"
            value={columnGroupValue}
            onValueChange={(value) => {
              setColumnGroupValue(value);
              updateOptionsVisibility(value, columnGroupOptions);
            }}
            variant={"outline"}
          >
            <ToggleGroupItem value={columnGroupOptions[0]} className="w-fit">
              General
            </ToggleGroupItem>
            <ToggleGroupItem value={columnGroupOptions[1]} className="w-fit">
              Visibility
            </ToggleGroupItem>
            <ToggleGroupItem value={columnGroupOptions[2]} className="w-fit">
              Exclude
            </ToggleGroupItem>
            <ToggleGroupItem value={columnGroupOptions[3]} className="w-fit">
              Highlight
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        {/* MARK: Option Buttons */}
        <div className="inline-block">
          Option Options:
          <div className="flex space-x-2">
            <button
              className="w-fit bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => {
                updateOptionsVisibility(allOptions, allOptions);
                setAppGroupValue(appGroupOptions);
                setDataGroupValue(dataGroupOptions);
                setColumnGroupValue(columnGroupOptions);
              }}
            >
              Select All
            </button>
            <button
              className="w-fit bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => {
                updateOptionsVisibility([], allOptions);
                setAppGroupValue([]);
                setDataGroupValue([]);
                setColumnGroupValue([]);
              }}
            >
              Deselect All
            </button>
          </div>
        </div>
      </div>
    </>
  );
  //#endregion
};
