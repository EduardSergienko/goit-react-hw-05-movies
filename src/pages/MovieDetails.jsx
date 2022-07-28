import { getMovieDetails } from 'services/MovieApi';
import { useEffect, useState, Suspense } from 'react';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { AdditionalInfo } from 'components/AdditionalInfo/AdditionalInfo';
import { GoBackLink } from 'components/GoBackLink/GoBackLink';
export default function MovieDetails() {
  const [movieDetails, setmMvieDetails] = useState(null);
  const [genres, setGenres] = useState([]);
  const [poster, setPoster] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    if (movieId === undefined) {
      return;
    }
    async function showFilmDetails() {
      try {
        const { data } = await getMovieDetails(movieId);
        console.log(data);
        setmMvieDetails(data);
        setPoster(data.poster_path);
        setGenres(data.genres);
      } catch (error) {}
    }
    showFilmDetails();
  }, [movieId]);

  const movieGenres = genres.map(gene => gene.name);
  const location = useLocation();
  return (
    <>
      {movieDetails && (
        <>
          <GoBackLink to={location.state?.from ?? '/Home'} />
          <MovieInfo
            moviePoster={poster}
            movieTitle={movieDetails.title}
            movieOverview={movieDetails.overview}
            movieRait={movieDetails.vote_average * 10}
            movieGenres={movieGenres.join(', ')}
            movieDate={movieDetails.release_date.slice(0, 4)}
          />
        </>
      )}

      <AdditionalInfo location={location.state?.from ?? '/Home'} />
      <Suspense fallback={<div>Loading..</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
