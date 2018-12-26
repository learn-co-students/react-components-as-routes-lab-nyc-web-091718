import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(a => (
        <div>
          <h2>Name: {a.name}</h2>
          <p>Movies:</p>
          <ul>
            {a.movies.map(m=><li>{m}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Actors;
