# FilmFolio

A React + Vite movie discovery app powered by [TMDB](https://www.themoviedb.org/) and AI recommendations (via OpenRouter using qwen free model).  
Browse popular, trending, and genre-filtered movies; mark favorites or add to watchlist; get AI-generated movie suggestions.

---

## Features

- **Home**

  - Carousel of Upcoming
  - Lists of Trending, Top-Rated, Now-Playing
  - Click a movie to view full details & trailer

- **Categories / Explore by Genre**

  - Fetch TMDB genres dynamically
  - Filter to see all movies in a selected genre
  - Paginated lists

- **Favorites & Watchlist**

  - Add/remove from context + persisted to localStorage
  - View paginated lists of saved movies
  - Clear all with one button

- **Explore with AI**

  - Describe in plain English (“I want a good comedy film”)
  - Send prompt to qwen AI model
  - Parse top-3 movie titles from response
  - Lookup TMDB IDs, display results

- **Routing & Layout**

  - React Router v6 for multi-page navigation
  - Lazy-loaded pages with React.Suspense + fallback
  - 404 Not Found page

- **UI / UX**

  - Responsive design
  - Light / Dark theme toggle
  - Scroll to top
  - Debounced search
  - Lazy image loading

- **Testing**
  - E2E tests with Cypress for routing & main flows

---

## Tech Stack

- **Framework**: React + Vite
- **Routing**: react-router-dom v6
- **State**: Context API + hooks
- **Styling**: CSS custom properties & component-scoped CSS
- **Icons**: react-icons (Ai, Fa sets)
- **Build & Dev**: Vite
- **AI**: (qwen3-1.7Bfree model) chat completion API
- **Testing**:
  - **E2E**: Cypress

---

## Setup & Run

1. **Clone & install**
   ```bash
   git clone repo url
   cd project folder
   npm install
   Add your.env keys
   ```

---

## Acknowledgments

- [TMDB API](https://www.themoviedb.org/documentation/api) for movie data
- OpenRouter/qwen : for AI completions
