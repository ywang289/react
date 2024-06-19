import React, { useState } from "react";
import DropDown from "./DropDown";
import "./styles.css";
import MovieRating from "./MovieRating";
import SearchResult from "./SearchResult";
import '@fortawesome/fontawesome-free/css/all.min.css';
import movies from "./data";




const App = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [dropratingVisible, setdropRatingVisble]=useState(false)
  const [searchValue, setSearchValue]= useState("")
  const [searchRatingValue, setSearchRatingValue]=useState([])
  const [selectedGenres, setSelectedGenres] = useState([]);
  



  const handleRatingChange = (event, rating) => {
    const isChecked = event.target.checked;
    if (rating === 0) {
      setSearchRatingValue((prev) => 
        isChecked ? [] : [...prev] );
    } else {
      setSearchRatingValue((prev) => 
        isChecked ? [...prev, rating] : prev.filter((r) => r !== rating)
      );
    }
  };


  const handleGenreChange = (event) => {
    const value = event.target.value;
    if (value === "Any Genre") {
      setSelectedGenres((prev) =>
        event.target.checked
          ? []
          : [...prev]
      );
    } else {
      setSelectedGenres((prev) =>
        event.target.checked
          ? [...prev, value].filter(genre => genre !== "Any Genre")
          : prev.filter((genre) => genre !== value)
      );
    }
  };


  const handleSearchChange= (event) => {
    const value = event.target.value.toLowerCase();
    setSearchValue(value)

  }

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  const toggleRating = () => {
    setdropRatingVisble(!dropratingVisible);
  };

  const filteredMovies = movies.filter((movie) => 
    (searchRatingValue.length === 0 || searchRatingValue.includes(movie.rating)) &&
    (selectedGenres.length === 0 || selectedGenres.includes(movie.category)) &&
    movie.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="App">
      <div className="input-wrapper">
        <input
          className="InputBox1"
          type="text"
          placeholder="Enter movie title"
          value={searchValue}
          onChange={handleSearchChange}
        />
        {searchValue && <SearchResult searchValue={searchValue}  filteredMovies={filteredMovies} />}
      </div>

      <div className="input-wrapper">
        <input
          className="InputBox2"
          type="text"
          placeholder="Rating"
          onClick={toggleRating }
          readOnly
        />
        <i className={`fas ${dropratingVisible ? 'fa-chevron-up' : 'fa-chevron-down'} arrow`}></i>
        {dropratingVisible && (
          <div className="RatingList" >
            {[...Array(11).keys()].map(i => (
              i !== 0 ? (
                <div key={i} className="rating-item">
                  <input 
                    type="checkbox" 
                    onChange={(e) => handleRatingChange(e, i)}
                    checked={searchRatingValue.includes(i)}
                  />
                  <MovieRating rating={i} />
                </div>
              ) : (
                <div key={i} className="rating-item">
                  <input 
                    type="checkbox" 
                    onChange={(e) => handleRatingChange(e, i)}
                    checked={searchRatingValue.length === 0}
                  />
                  <p>Any rating</p>
                </div>
              )
            ))}
          </div>
        )}
        </div>
      
      <div className="input-wrapper">
        <input
          className="InputBox2"
          type="text"
          placeholder="Genre"
          onClick={toggleDropdown}
          readOnly
        />
        <i className={`fas ${dropdownVisible ? 'fa-chevron-up' : 'fa-chevron-down'} arrow`}></i>
        {dropdownVisible && (
          <DropDown
            selectedGenres={selectedGenres}
            handleGenreChange={handleGenreChange}
          />
        )}
      </div>
      
    </div>
  );
};

export default App;
