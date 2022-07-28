import { Link } from 'react-router-dom';
import styles from './AdditionalInfo.module.scss';

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
