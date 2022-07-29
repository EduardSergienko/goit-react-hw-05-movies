import { Link } from 'react-router-dom';
import styles from './GoBackLink.module.scss';
import PropTypes from 'prop-types';
export function GoBackLink({ to }) {
  console.log(to);
  return (
    <Link className={styles.backLink} to={to}>
      Go back
    </Link>
  );
}
GoBackLink.propTypes = {
  to: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
    state: PropTypes.bool,
  }).isRequired,
};
