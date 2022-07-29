import { Link } from 'react-router-dom';
import styles from './GoBackLink.module.scss';

import { useLocation } from 'react-router-dom';

export function GoBackLink() {
  const location = useLocation();
  return (
    <Link className={styles.backLink} to={location.state?.from ?? '/Home'}>
      Go back
    </Link>
  );
}
