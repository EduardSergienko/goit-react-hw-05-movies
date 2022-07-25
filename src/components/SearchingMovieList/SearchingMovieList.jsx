// import { SearchBar } from 'components/SearchBar/SearchBar';
// import { useState, useEffect } from 'react';
// import { movieSearching } from 'services/MovieApi';

export function SearchingMovieList({ moviesdata }) {
  return (
    <ul>
      {moviesdata.map(({ id, title }) => {
        return (
          <li key={id}>
            <p>{title}</p>
          </li>
        );
      })}
    </ul>
  );
}
