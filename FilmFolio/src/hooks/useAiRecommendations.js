import { useState } from "react";
import { getAiMovieTitles } from "../utils/hfClient";
import { SYSTEM_PROMPT } from "../constants/api";

const useAiRecommendations = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchRecommendations(userInput) {
    setLoading(true);
    setError(null);
    try {
      const titles = await getAiMovieTitles(userInput, SYSTEM_PROMPT);

      return titles.filter((t) => typeof t === "string" && t.length > 2);
    } catch (err) {
      setError(err.message);
      return [];
    } finally {
      setLoading(false);
    }
  }

  return { fetchRecommendations, loading, error };
};

export default useAiRecommendations;
