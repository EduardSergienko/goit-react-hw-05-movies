import { fetchTrandingFilms } from 'services/MovieApi';
import { useEffect, useState } from 'react';
import { TrendingMovieItem } from 'components/TrendingMovieItem/TrendingMovieItem';
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
        return <TrendingMovieItem key={id} filmTitle={title} />;
      })}
    </ul>
  );
}
