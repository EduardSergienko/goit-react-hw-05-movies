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
  let src = `https://image.tmdb.org/t/p/original${moviePoster}`;
  if (moviePoster === null) {
    src =
      'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png';
  }
  return (
    <div className={styles.movieInfoWrap}>
      <div className={styles.posterWrap}>
        <img className={styles.movieInfoPoster} src={src} alt="" />
      </div>
      <div>
        <h2>
          {movieTitle} ({movieDate})
        </h2>
        <p className={styles.overview}>User Score: {movieRait}%</p>
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
