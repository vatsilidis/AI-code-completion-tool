import type React from "react";

interface AICompletionSuggestionsProps {
  suggestions: string[];
}

export const AICompletionSuggestions: React.FC<
  AICompletionSuggestionsProps
> = ({ suggestions }) => {
  return (
    <div className="w-30% p-4 bg-gray-100 overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">AI Suggestions</h2>
      {suggestions.map((suggestion, index) => (
        <div key={index} className="bg-white p-2 mb-2 rounded shadow">
          {suggestion}
        </div>
      ))}
    </div>
  );
};
