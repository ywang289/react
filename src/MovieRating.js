import React from "react";

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 10; i++) { 
    if (rating >= i) {
      stars.push(<span key={i} className="star filled">★</span>);
    } else if (rating + 0.5 === i) {
      stars.push(<span key={i} className="star half">★</span>);
    } else {
      stars.push(<span key={i} className="star">★</span>);
    }
  }
  return stars;
};

const MovieRating = ({ rating }) => {
  return <div className="movie-rating">{renderStars(rating)}</div>;
};

export default MovieRating;
