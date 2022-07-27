import { Link } from 'react-router-dom';
import styles from './AdditionalInfo.module.scss';
export function AdditionalInfo() {
  return (
    <div className={styles.additionalWrap}>
      <h2>Additional Information</h2>
      <div className={styles.additionalLinkWrap}>
        <Link className={styles.additionalLink} to="cast">
          Cast
        </Link>
        <Link className={styles.additionalLink} to="reviews">
          Reviews
        </Link>
      </div>
    </div>
  );
}
