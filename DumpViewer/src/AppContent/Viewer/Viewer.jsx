import React from "react";
import { ImportData } from "./ImportData";
import { Button } from "@/components/ui/button";

export const Viewer = ({ data, setData }) => {
  if (!data) {
    return <ImportData setData={setData} />;
  }

  return (
    <div className="bg-black text-white p-4">
      <pre className="s">{data}</pre>
    </div>
  );
};
