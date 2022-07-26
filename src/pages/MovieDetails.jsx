import { getMovieDetails } from 'services/MovieApi';
import { useEffect, useState } from 'react';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { useParams } from 'react-router-dom';

export function MovieDetails() {
  const [movieDetails, setmMvieDetails] = useState({});
  const [genres, setGenres] = useState([]);
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
        setGenres(data.genres);
      } catch (error) {}
    }
    showFilmDetails();
  }, [movieId]);

  const movieGenres = genres.map(gene => gene.name);

  return (
    <MovieInfo
      moviePoster={movieDetails.poster_path}
      movieTitle={movieDetails.title}
      movieOverview={movieDetails.overview}
      movieRait={movieDetails.vote_average}
      movieGenres={movieGenres.join(', ')}
    />
  );
}
