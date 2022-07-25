import { fetchTrandingFilms } from 'services/MovieApi';
import { useEffect, useState } from 'react';
import { MovieItem } from 'components/MovieItem/MovieItem';
export function Home() {
  const [moviesData, setMoviesData] = useState([]);
  //   const [page, setPage] = useState();

  useEffect(() => {
    async function showTrandingFilms() {
      const { data } = await fetchTrandingFilms();

      setMoviesData(data.results);
      //   setPage(data.page);
    }
    showTrandingFilms();
  }, []);
  return (
    <ul>
      {moviesData.map(({ id, title }) => {
        return <MovieItem key={id} filmTitle={title} />;
      })}
    </ul>
  );
}
