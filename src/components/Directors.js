import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, index) => {
        return (
          <div key={index}>
            {director.name} -
            {director.movies.map((movie, i) => <ul key={i}>{movie}</ul>)}
          </div>
        )
      })}
    </div>
  );
}

export default Directors
