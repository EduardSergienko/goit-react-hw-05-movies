import { SearchBar } from 'components/SearchBar/SearchBar';
import { useState, useEffect } from 'react';
import { movieSearching } from 'services/MovieApi';
import PropTypes from 'prop-types';
import { MovieList } from 'components/MovieList/MovieList';
import { MovieItem } from 'components/MovieItem/MovieItem';
import { useSearchParams } from 'react-router-dom';

export default function Movies() {
  const [formQuery, setFormQuery] = useState('');
  const [moviesData, setMoviesData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

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
