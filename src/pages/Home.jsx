import { fetchTrandingFilms } from 'services/MovieApi';
import { useEffect, useState } from 'react';
import { MovieItem } from 'components/MovieItem/MovieItem';
import { MovieList } from 'components/MovieList/MovieList';

export function Home() {
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    async function showTrandingFilms() {
      try {
        const { data } = await fetchTrandingFilms();

        setMoviesData(data.results);
      } catch (error) {}
    }
    showTrandingFilms();
  }, []);
  return (
    <MovieList>
      {moviesData.map(({ id, title }) => {
        return <MovieItem key={id} filmTitle={title} movieId={id} />;
      })}
    </MovieList>
  );
}
