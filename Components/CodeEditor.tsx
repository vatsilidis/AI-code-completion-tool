import type React from "react";
import MonacoEditor from "react-monaco-editor";

interface CodeEditorProps {
  onCodeChange: (code: string) => void;
}

export const CodeEditor: React.FC<CodeEditorProps> = ({ onCodeChange }) => {
  const handleEditorChange = (value: string) => {
    onCodeChange(value);
  };

  return (
    <MonacoEditor
      width="800"
      height="600"
      language="javascript"
      theme="vs-dark"
      onChange={handleEditorChange}
    />
  );
};
