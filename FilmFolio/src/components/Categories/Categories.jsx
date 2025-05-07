import React from "react";
import { useFetch } from "../../hooks/useFetch";
import Loading from "../Loading/Loading";
import ErrorDisplay from "../Error/Error";
import { GENRES } from "../../constants/api";
import "./Categories.css";

const Categories = ({ activeGenre, onSelectGenre }) => {
  const { data, loading, error } = useFetch(GENRES);

  const categories = data ? data.genres : [];

  if (loading) return <Loading />;
  if (error) return <ErrorDisplay error={error} />;

  return (
    <div className="categories-container">
      <ul className="categories-list">
        {categories.map((genre) => (
          <button
            key={genre.id}
            className={
              activeGenre === genre.id
                ? "category-item-active"
                : "category-item"
            }
            onClick={() => onSelectGenre(genre.id)}
          >
            {genre.name}
          </button>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
