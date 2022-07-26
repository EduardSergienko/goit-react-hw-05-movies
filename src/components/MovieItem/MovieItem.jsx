/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from 'prop-types';
export const MovieItem = ({ filmTitle }) => {
  return (
    <li>
      <a href="#">{filmTitle}</a>
    </li>
  );
};

MovieItem.propTypes = {
  filmTitle: PropTypes.string.isRequired,
};
