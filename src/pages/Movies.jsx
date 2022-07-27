import { SearchBar } from 'components/SearchBar/SearchBar';
import { useState, useEffect } from 'react';
import { movieSearching } from 'services/MovieApi';

import { MovieList } from 'components/MovieList/MovieList';
import { MovieItem } from 'components/MovieItem/MovieItem';

export function Movies() {
  const [formQuery, setFormQuery] = useState('');
  const [moviesData, setMoviesData] = useState([]);
  console.log(moviesData);
  useEffect(() => {
    async function searchMovie() {
      if (formQuery === '') {
        return;
      }
      try {
        const { data } = await movieSearching(formQuery);

        setMoviesData(data.results);
      } catch (error) {}
    }
    searchMovie();
  }, [formQuery]);

  const formData = data => {
    setFormQuery(data);
  };

  return (
    <>
      <SearchBar onSubmit={formData} />
      <MovieList>
        {moviesData.map(({ id, title }) => {
          return <MovieItem key={id} filmTitle={title} movieId={id} />;
        })}
      </MovieList>
    </>
  );
}
