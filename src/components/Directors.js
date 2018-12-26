import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(d => (
        <div>
          <h2>Name: {d.name}</h2>
          <p>Movies:</p>
          <ul>
            {d.movies.map(m=><li>{m}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Directors
