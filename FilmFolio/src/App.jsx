import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Watchlist from './pages/Watchlist';
import  MovieDetails  from './pages/MovieDetails';
import Explore from './pages/Explore';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
       <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/film/:id" element={<MovieDetails />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="*" element={<NotFound />} /> 

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
