// @ts-nocheck

import { Badge } from "@/components/ui/badge";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import React, { useEffect } from "react";
import { allOptions } from "../Options";

/**
 * MARK: TopBar
 * @param {object} props
 * @param {object} props.whatIsVisible - Object containing visibility states for various UI elements
 * @param {function} props.setWhatIsVisible - Function to update the visibility states
 */
// @ts-ignore
export const TopBar = ({ whatIsVisible, setWhatIsVisible }) => {
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

  const updateOptionsVisibility = (newValue, groupOptions) => {
    // if groupOption is in newValue, toggle its visibility on
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

  useEffect(() => {
    console.log("whatIsVisible", whatIsVisible);
  }, [whatIsVisible]);

  return (
    <>
      <div className="w-screen bg-slate-600 inline-flex p-2">
        <h1 className="w-fit"> DumpViewer v0.2</h1>
        <a href="http://ewrdad.github.io">
          <Badge className={"ml-5"}>Developed by Ewrdad</Badge>
        </a>
      </div>
      <div className="w-screen bg-slate-300 p-2 inline-flex ">
        <div className="pr-4">
          App options:
          <ToggleGroup
            type="multiple"
            defaultValue={[allOptions[0], allOptions[1]]}
            onValueChange={(value) => {
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
        <div className="pr-4">
          Data options:
          <ToggleGroup
            type="multiple"
            onValueChange={(value) => {
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
        <div className="inline-block">
          Column options:
          <ToggleGroup
            type="multiple"
            variant={"outline"}
            onValueChange={(value) => {
              updateOptionsVisibility(value, columnGroupOptions);
            }}
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
      </div>
    </>
  );
};
