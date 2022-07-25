import { SearchBar } from 'components/SearchBar/SearchBar';
import { useState, useEffect } from 'react';
import { movieSearching } from 'services/MovieApi';
import { SearchingMovieList } from 'components/SearchingMovieList/SearchingMovieList';

export function Movies() {
  const [formQuery, setFormQuery] = useState('');
  const [moviesData, setMoviesData] = useState([]);
  console.log(moviesData);
  useEffect(() => {
    async function searchMovie() {
      if (formQuery === '') {
        return;
      }
      const { data } = await movieSearching(formQuery);
      //   console.log(data);
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
      <SearchingMovieList moviesdata={moviesData} />
    </>
  );
}
