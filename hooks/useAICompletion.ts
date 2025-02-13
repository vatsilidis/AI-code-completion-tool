"use client";

import { useState, useCallback } from "react";

// This hook acts a bridge between the Client side and the APIs by fetching completion suggestions from the AI model through the server.
export const useAICompletion = () => {
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const requestCompletion = useCallback(
    async (code: string) => {
      try {
        const response = await fetch("/api/ai-completion", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code }),
        });
        const data = await response.json();
        setSuggestions(data.suggestions);
      } catch (error) {
        console.error("Error fetching AI completion:", error);
      }
    },
    [setSuggestions]
  );

  return { suggestions, requestCompletion };
};
