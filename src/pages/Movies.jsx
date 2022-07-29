import { SearchBar } from 'components/SearchBar/SearchBar';
import { useState, useEffect } from 'react';
import { movieSearching } from 'services/MovieApi';

import { MovieList } from 'components/MovieList/MovieList';
import { MovieItem } from 'components/MovieItem/MovieItem';
import { useSearchParams } from 'react-router-dom';
import Notiflix from 'notiflix';

export default function Movies() {
  const [moviesData, setMoviesData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    async function searchMovie() {
      if (query === '') {
        return;
      }

      try {
        const { data } = await movieSearching(query);

        setMoviesData(data.results);

        if (data.results.length === 0) {
          return Notiflix.Notify.failure(
            'Sorry, there are no movies matching your search query. Please try again.'
          );
        }
      } catch (error) {}
    }
    searchMovie();
  }, [query]);

  const formData = data => {
    setSearchParams({ query: data.toLowerCase().trim() });
  };

  return (
    <>
      <SearchBar value={query} onSubmit={formData} />
      <MovieList>
        {moviesData.map(({ id, title }) => {
          return <MovieItem key={id} filmTitle={title} movieId={id} />;
        })}
      </MovieList>
    </>
  );
}
