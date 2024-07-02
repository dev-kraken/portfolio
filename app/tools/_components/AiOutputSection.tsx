"use client";
import React, { useEffect, useRef } from "react";
import ToolCard from "@/app/tools/_components/tool-card";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";

interface AiOutputSectionProps {
  className?: string;
  aiOutput: string;
}

const AiOutputSection = ({ className, aiOutput }: AiOutputSectionProps) => {
  const editorRef: any = useRef();
  useEffect(() => {
    const editorInstance = editorRef.current.getInstance();
    editorInstance.setMarkdown(aiOutput);
  }, [aiOutput]);
  return (
    <ToolCard
      title="Your Result"
      className={className}
      buttonText="Copy"
      buttonValue={aiOutput}
    >
      <Editor
        ref={editorRef}
        initialValue="Your result will appear here"
        initialEditType="wysiwyg"
        height="600px"
        useCommandShortcut={true}
        onChange={() => {}}
      />
    </ToolCard>
  );
};

export default AiOutputSection;
