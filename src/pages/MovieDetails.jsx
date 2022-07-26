import { getMovieDetails } from 'services/MovieApi';
import { useEffect, useState } from 'react';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { useParams, Outlet } from 'react-router-dom';
import { AdditionalInfo } from 'components/AdditionalInfo/AdditionalInfo';

export function MovieDetails() {
  const [movieDetails, setmMvieDetails] = useState({});
  const [genres, setGenres] = useState([]);
  const [poster, setPoster] = useState('');
  const { movieId } = useParams();
  console.log(movieDetails);
  useEffect(() => {
    if (movieId === undefined) {
      return;
    }
    async function showFilmDetails() {
      try {
        const { data } = await getMovieDetails(movieId);

        setmMvieDetails(data);
        setPoster(data.poster_path);
        setGenres(data.genres);
      } catch (error) {}
    }
    showFilmDetails();
  }, [movieId]);

  const movieGenres = genres.map(gene => gene.name);

  return (
    <>
      {movieDetails !== {} && (
        <MovieInfo
          moviePoster={poster}
          movieTitle={movieDetails.title}
          movieOverview={movieDetails.overview}
          movieRait={movieDetails.vote_average}
          movieGenres={movieGenres.join(', ')}
        />
      )}

      <AdditionalInfo />
      <Outlet />
    </>
  );
}
