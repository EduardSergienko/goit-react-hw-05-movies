/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
export const MovieItem = ({ filmTitle, movieId }) => {
  return (
    <li>
      <Link to={`/movies/${movieId}`}> {filmTitle}</Link>
    </li>
  );
};

MovieItem.propTypes = {
  filmTitle: PropTypes.string.isRequired,
};
