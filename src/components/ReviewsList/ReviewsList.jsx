import PropTypes from 'prop-types';

export function ReviewsList({ authorName, rewContent }) {
  return (
    <li>
      <h2>Author:{authorName} </h2>
      <p>{rewContent}</p>
    </li>
  );
}
ReviewsList.propTypes = {
  authorName: PropTypes.string.isRequired,
  rewContent: PropTypes.string.isRequired,
};
