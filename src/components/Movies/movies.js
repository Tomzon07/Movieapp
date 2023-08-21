import React from 'react';
import { useSelector } from 'react-redux';
import { getAllmovies } from '../../feature/moviesStore/movieSlice';
import MovieCard from '../MovieCard/movieCard'; 
import "./movies.scss"

const Movies = () => {
  const movies = useSelector(getAllmovies);

  let renderMovies = ""; 

  if (movies.Response === "True") {
    renderMovies = (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} /> // Removed unnecessary curly braces after 'MovieCard' and 'index'
      ))
    );
  } else {
    renderMovies = (
      <div className="error">
        <h3>{movies.error}</h3>
      </div>
    );
  }

  return (
    <div className='movie-wrapper'>
      <div className='movie-list'>
        {/* <h2>Movies</h2> */}
         <div className='movie-container'>  {renderMovies}  </div> 
      </div>
    </div>
  );
};

export default Movies;
