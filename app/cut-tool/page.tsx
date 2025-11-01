import React from "react";
import CutTool from "../components/CutTool";

export default function CutToolPage() {
  return (
    <div className="flex flex-col gap-8 justify-center items-center h-dvh px-4">
      <h1 className="text-2xl">CUT TOOL</h1>
      <CutTool />
    </div>
  );
}
