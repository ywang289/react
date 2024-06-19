import React from "react";

const genres = ["Any Genre", "Action", "Comedy", "Drama", "Thriller"];

const DropDown = ({ selectedGenres, handleGenreChange }) => {
  return (
    <div className="dropdown">
      {genres.map((genre) => (
        <label key={genre}>
          <input
            type="checkbox"
            value={genre}
            checked={genre === "Any Genre" ? selectedGenres.length === 0 : selectedGenres.includes(genre)}
            onChange={handleGenreChange}
          />
          {genre}
        </label>
      ))}
    </div>
  );
};

export default DropDown;
