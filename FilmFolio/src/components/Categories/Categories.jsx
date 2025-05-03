import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import { GENRES } from '../../constants/api';
import './Categories.css';

const Categories = () => {
  const { data, loading, error } = useFetch(GENRES);
  
  // genres array.
  const categories = data ? data.genres : [];

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  
  return (
    <div className="categories-container">
      <ul className="categories-list">
        {categories.map((genre) => (
          <li key={genre.id} className="category-item">
            {genre.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
