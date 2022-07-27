import { Link } from 'react-router-dom';
import styles from './MovieItem.module.scss';
import PropTypes from 'prop-types';
export const MovieItem = ({ filmTitle, movieId }) => {
  return (
    <li className={styles.item}>
      <Link className={styles.itemLink} to={`/movies/${movieId}`}>
        {filmTitle}
      </Link>
    </li>
  );
};

MovieItem.propTypes = {
  filmTitle: PropTypes.string.isRequired,
};
