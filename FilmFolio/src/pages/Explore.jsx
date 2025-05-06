import React, { useState } from "react";
import useAiRecommendations from "../hooks/useAiRecommendations";
import useMoviesByIds from "../hooks/useMoviesByIds";
import DisplayMovies from "../components/DisplayMovies/DisplayMovies";
import { SEARCH_MOVIE } from "../constants/api";
import "./styles/Explore.css";
import Loading from "../components/Loading/Loading";
import ErrorDisplay from "../components/Error/Error";

export default function Explore() {
  const [prompt, setPrompt] = useState("");
  const [ids, setIds]       = useState([]);

  const { fetchRecommendations, loading, error } = useAiRecommendations();
  const { movies, loading: l2, error: e2 } = useMoviesByIds(ids);

  const handleGenerate = async () => {
    const titles = await fetchRecommendations(prompt);
    const fetchedIds = await Promise.all(
      titles.map(async t => {
        const res = await fetch(`${SEARCH_MOVIE}${encodeURIComponent(t)}`);
        const js  = await res.json();
        return js.results[0]?.id;
        
      })
    );
    setIds(fetchedIds.filter(Boolean));
  };



  return (
    <div className="explore-container" >
      <h2>Explore with AI</h2>
      <div className="explore-form">
      <input
      className="explore-input"
        name="AskAI"
        value={prompt}
        onChange={e => setPrompt(e.target.value)}
        placeholder="Describe what you’d like to watch…"
      />
      <button  className="explore-button" onClick={handleGenerate} disabled={loading}>
      {loading ? "Thinking..." : "Generate"}
      </button>
      </div>

      {error && <ErrorDisplay error={error}/> }
         { loading && <Loading />}
      {ids.length > 0 && (
        <DisplayMovies
          movies={movies}
          loading={l2}
          error={e2}
          page={1}
          totalPages={1}
          onPageChange={()=>{}}
          onClear={()=>setIds([])}
          clearText="Clear"
        />
      )}
    </div>
  );
}
