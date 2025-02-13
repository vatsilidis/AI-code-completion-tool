import type React from "react";

import { useAICompletion } from "@/hooks/useAICompletion";
import { AICompletionSuggestions } from "@/Components/AICompletionSuggestions";
import { CodeEditor } from "@/Components/CodeEditor";

const CodeCompletionTool: React.FC = () => {
  const { suggestions, requestCompletion } = useAICompletion();

  return (
    <div className="flex h-screen">
      <CodeEditor onCodeChange={requestCompletion} />
      <AICompletionSuggestions suggestions={suggestions} />
    </div>
  );
};

export default CodeCompletionTool;
