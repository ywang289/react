import React from "react";
import MovieRating from "./MovieRating";

const highlightText = (text, highlight) => {
  const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
  return (
    <span>
      {parts.map((part, index) => 
        part.toLowerCase() === highlight.toLowerCase() ? (
          <span key={index} style={{ fontWeight: 'bold' }}>{part}</span>
        ) : (
          part
        )
      )}
    </span>
  );
};



const SearchResult = ({ searchValue, filteredMovies}) => {
  

  return (
    <div className="SearchResult">  
          {filteredMovies.map((movie) => (
            <div key={movie.title} className="movie">
              <div className="movie-header">
                <p className="movie-title">{highlightText(movie.title, searchValue)}</p>
                <p className="movie-category">{movie.category}</p>
              </div>
              <MovieRating rating={movie.rating}/>
            </div>
          ))}  
    </div>
  );
};

export default SearchResult;
