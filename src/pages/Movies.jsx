import { SearchBar } from 'components/SearchBar/SearchBar';
import { useState, useEffect } from 'react';
import { movieSearching } from 'services/MovieApi';

import { MovieList } from 'components/MovieList/MovieList';
import { MovieItem } from 'components/MovieItem/MovieItem';

export function Movies() {
  const [formQuery, setFormQuery] = useState('');
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    async function searchMovie() {
      if (formQuery === '') {
        return;
      }
      const { data } = await movieSearching(formQuery);

      setMoviesData(data.results);
    }
    searchMovie();
  }, [formQuery]);

  const formData = data => {
    console.log(data);
    setFormQuery(data);
  };

  return (
    <>
      <SearchBar onSubmit={formData} />
      <MovieList>
        {moviesData.map(({ id, title }) => {
          return <MovieItem key={id} filmTitle={title} />;
        })}
      </MovieList>
    </>
  );
}
