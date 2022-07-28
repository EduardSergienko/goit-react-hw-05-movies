import { SearchBar } from 'components/SearchBar/SearchBar';
import { useState, useEffect } from 'react';
import { movieSearching } from 'services/MovieApi';
import PropTypes from 'prop-types';
import { MovieList } from 'components/MovieList/MovieList';
import { MovieItem } from 'components/MovieItem/MovieItem';
import { useSearchParams } from 'react-router-dom';

export default function Movies() {
  const [moviesData, setMoviesData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  console.log(query);

  useEffect(() => {
    async function searchMovie() {
      if (query === '') {
        return;
      }
      try {
        const { data } = await movieSearching(query);

        setMoviesData(data.results);
      } catch (error) {}
    }
    searchMovie();
  }, [query]);

  const formData = data => {
    setSearchParams({ query: data });
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

Movies.propTypes = {
  key: PropTypes.number,
};
