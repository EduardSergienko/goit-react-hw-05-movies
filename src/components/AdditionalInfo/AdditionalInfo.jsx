import { Link } from 'react-router-dom';
import styles from './AdditionalInfo.module.scss';
import PropTypes from 'prop-types';
export function AdditionalInfo({ location }) {
  console.log(location);
  return (
    <div className={styles.additionalWrap}>
      <h2>Additional Information</h2>
      <div className={styles.additionalLinkWrap}>
        <Link
          className={styles.additionalLink}
          to="cast"
          state={{ from: location }}
        >
          Cast
        </Link>
        <Link
          className={styles.additionalLink}
          to="reviews"
          state={{ from: location }}
        >
          Reviews
        </Link>
      </div>
    </div>
  );
}

AdditionalInfo.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
    state: PropTypes.bool,
  }).isRequired,
};
