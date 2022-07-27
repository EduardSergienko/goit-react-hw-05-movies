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
      <div className={styles.posterWrap}>
        <img
          className={styles.movieInfoPoster}
          src={`https://image.tmdb.org/t/p/original${moviePoster}`}
          alt=""
        />
      </div>
      <div>
        <h2>{movieTitle}</h2>
        <p className={styles.overview}>User Score: {movieRait}</p>
        <p className={styles.overview}>Overview</p>
        <p className={styles.overviewContent}>{movieOverview}</p>
        <p className={styles.overview}>Genres</p>
        <p>{movieGenres}</p>
      </div>
    </div>
  );
}
