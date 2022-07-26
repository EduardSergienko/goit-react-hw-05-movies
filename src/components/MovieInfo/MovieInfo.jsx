import styles from './MovieInfo.module.scss';

export function MovieInfo({
  movieTitle,
  movieOverview,
  movieRait,
  moviePoster,
  movieGenres,
}) {
  return (
    <div className={styles.movieInfoWrap}>
      <div>
        <img
          className={styles.movieInfoPoster}
          src={`https://image.tmdb.org/t/p/original${moviePoster}`}
          alt=""
        />
      </div>
      <div>
        <h2>{movieTitle}</h2>
        <p>User Score: {movieRait}</p>
        <p>Overview</p>
        <p>{movieOverview}</p>
        <p>Genres</p>
        <p>{movieGenres}</p>
      </div>
    </div>
  );
}
