import styles from './MovieInfo.module.scss';
import PropTypes from 'prop-types';

export function MovieInfo({
  movieTitle,
  movieOverview,
  movieRait,
  moviePoster,
  movieGenres,
  movieDate,
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
        <h2>
          {movieTitle} ({movieDate})
        </h2>
        <p className={styles.overview}>User Score: {movieRait}</p>
        <p className={styles.overview}>Overview</p>
        <p className={styles.overviewContent}>{movieOverview}</p>
        <p className={styles.overview}>Genres</p>
        <p>{movieGenres}</p>
      </div>
    </div>
  );
}

MovieInfo.propTypes = {
  movieTitle: PropTypes.string.isRequired,
  movieOverview: PropTypes.string.isRequired,
  movieRait: PropTypes.number.isRequired,
  moviePoster: PropTypes.string.isRequired,
  movieGenres: PropTypes.string.isRequired,
  movieDate: PropTypes.string.isRequired,
};
