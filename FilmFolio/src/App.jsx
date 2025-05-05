import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { FavoritesProvider } from './context/FavoritesContext';
import { WatchlistProvider } from './context/WatchlistContext';

import Loading from './components/Loading/Loading';

const Home = lazy(() => import('./pages/Home'));
const Favorites = lazy(() => import('./pages/Favorites'));
const Watchlist = lazy(() => import('./pages/Watchlist'));
const MovieDetails = lazy(() => import('./pages/MovieDetails'));
const Explore = lazy(() => import('./pages/Explore'));
const NotFound = lazy(() => import('./pages/NotFound'));


function App() {
  return (
    <FavoritesProvider>
      <WatchlistProvider>
        <Router>

          <Navbar />
          <Suspense fallback={<Loading  />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/watchlist" element={<Watchlist />} />
              <Route path="/film/:id" element={<MovieDetails />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <Footer />
          <ScrollToTop />

        </Router>
      </WatchlistProvider>
    </FavoritesProvider>
  );
}

export default App;
