import React from 'react';

function Movie({ title, cost, year }) {
  return (
    <div>
      <h3>
        {title} (<em>{year}</em>)
      </h3>
      <p>${cost}</p>
    </div>
  );
}

export default Movie;
