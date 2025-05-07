import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { IMG_BASE_URL } from "../../constants/api";
import Loading from "../Loading/Loading";
import ErrorDisplay from "../Error/Error";
import "./Slider.css";

const Slider = ({ data, loading, error }) => {
  const sliderRef = useRef();

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= window.innerWidth * 0.9;
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += window.innerWidth * 0.9;
    }
  };

  if (error) return <ErrorDisplay error={error} />;
  if (loading) return <Loading />;

  return (
    <div className="upcoming-slider-container">
      <IoChevronBackOutline
        onClick={slideLeft}
        className="upcoming-arrow upcoming-arrow-left"
      />
      <div ref={sliderRef} className="upcoming-slider">
        {data.map((movie) => (
          <Link
            key={movie.id}
            to={`/film/${movie.id}`}
            className="slider-item-link"
          >
            <div key={movie.id} className="upcoming-slide">
              {movie.backdrop_path ? (
                <img
                  src={`${IMG_BASE_URL}${movie.backdrop_path}`}
                  alt=""
                  className="upcoming-slide-image"
                />
              ) : (
                <div className="upcoming-slide-placeholder">
                  No Image Available
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
      <IoChevronForwardOutline
        onClick={slideRight}
        className="upcoming-arrow upcoming-arrow-right"
      />
    </div>
  );
};

export default Slider;
