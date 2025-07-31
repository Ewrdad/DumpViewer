import React, { useEffect, useState } from "react";
import { Viewer } from "./Viewer/Viewer";
import { TopBar } from "./Filterer/TopBar/TopBar";
import { Sidebar } from "./Filterer/SideBar/Sidebar";
import { allOptions } from "./Filterer/Options";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";

export const Main = () => {
  // Accessibility state
  const [accessibilityOptions, setAccessibilityOptions] = useState({
    colourOveride: {
      primary: "#000000",
      secondary: "#ffffff",
    },
    fontSize: 10,
  });
  // State for managing filter settings
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
  // State for what is visible in the sidebar
  const [whatIsVisible, setWhatIsVisible] = useState({
    [allOptions[0]]: true,
    [allOptions[1]]: true,
  });
  // Data state
  const [data, setData] = useState(null);
  const clearData = () => {
    setData(null);
    window.localStorage.removeItem("dumpViewerData");
  };

  useEffect(() => {
    document.title = "DumpViewer";
    const localStorageData = window.localStorage.getItem("dumpViewerData");
    if (localStorageData) {
      setData(localStorageData);
    }
  }, []);

  return (
    <div className="fixed inset-0 h-screen w-screen bg-white">
      <ResizablePanelGroup
        direction="horizontal"
        className="h-full w-full relative"
      >
        {/* Main content and TopBar on the left */}
        <ResizablePanel>
          <div className="flex flex-col h-full">
            <TopBar
              whatIsVisible={whatIsVisible}
              setWhatIsVisible={setWhatIsVisible}
            />
            {/* Viewer below TopBar */}
            <div className="flex-1 relative">
              <Viewer data={data} setData={setData} />
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle className="" />
        {/* Sidebar on the right, overlays main content */}
        <ResizablePanel
          defaultSize={25}
          minSize={15}
          maxSize={50}
          className="!min-w-[200px] !max-w-[600px] relative"
        >
          <div className="absolute inset-0 h-full w-full z-50 pointer-events-auto">
            <Sidebar
              filter={filter}
              setFilter={setFilter}
              whatIsVisible={whatIsVisible}
              clearData={clearData}
            />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};
