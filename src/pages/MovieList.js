import React, { useState, useEffect } from 'react';
import Movie from './Movie';
import './MovieList.css';

function MovieList() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(
        'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year'
      )
    ).json();

    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div className='container'>
      {loading ? (
        <div className='loader'>
          <span>loading...</span>
        </div>
      ) : (
        <div className='movieList'>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              coverImg={movie.medium_cover_image}
              genres={movie.genres}
              summary={movie.summary}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default MovieList;
