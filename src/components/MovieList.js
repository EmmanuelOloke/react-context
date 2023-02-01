import React, { useState } from 'react';
import Movie from './Movie.js';

function MovieList() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'Tomorrowland',
      year: '2015',
      cost: '15',
    },
    {
      id: 2,
      title: 'Black Panther',
      year: '2018',
      cost: '25',
    },
    {
      id: 3,
      title: 'Spiderman',
      year: '2002',
      cost: '10',
    },
    {
      id: 4,
      title: 'The Old Guard',
      year: '2020',
      cost: '20',
    },
    {
      id: 5,
      title: 'Transformer',
      year: '2011',
      cost: '12',
    },
  ]);
  return (
    <div>
      {movies.map((movie) => (
        <Movie title={movie.title} cost={movie.cost} year={movie.year} key={movie.id} />
      ))}
    </div>
  );
}

export default MovieList;
