import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const ImportData = ({ setData }) => {
  const [textValue, setTextValue] = useState("");

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
          <h1 className="text-2xl font-bold mb-4">Import Data</h1>
          <Textarea
            placeholder="Paste your data here..."
            className="w-full h-64"
            onChange={(e) => setTextValue(e.target.value)}
          />
          <Button
            onMouseUp={() => {
              window.localStorage.setItem("dumpViewerData", textValue);
              setData(textValue);
            }}
            className="mt-4 w-full"
            variant={"outline"}
          >
            Submit
          </Button>
        </div>
      </div>
    </>
  );
};
