import React, { createContext, useContext, useState, useEffect } from 'react';

const WatchlistContext = createContext();

export const useWatchlist = () => {
  const ctx = useContext(WatchlistContext);
  if (!ctx) throw new Error("useWatchlist must be used within WatchlistProvider");
  return ctx;
};

export const WatchlistProvider = ({ children }) => {
  const [watchlistIds, setWatchlistIds] = useState(() => {
    const stored = localStorage.getItem('watchlistIds');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('watchlistIds', JSON.stringify(watchlistIds));
  }, [watchlistIds]);

  const toggleWatchlist = (id) => {
    setWatchlistIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const isInWatchlist = (id) => watchlistIds.includes(id);

  return (
    <WatchlistContext.Provider value={{ watchlistIds, toggleWatchlist, isInWatchlist }}>
      {children}
    </WatchlistContext.Provider>
  );
};
