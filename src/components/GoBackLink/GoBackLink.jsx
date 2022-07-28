import { Link } from 'react-router-dom';
import styles from './GoBackLink.module.scss';
export function GoBackLink({ to }) {
  return (
    <Link className={styles.backLink} to={to}>
      Go back
    </Link>
  );
}
