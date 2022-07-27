import PropTypes from 'prop-types';

export function ReviewsList({ authorName, rewContent }) {
  return (
    <ul>
      <li>
        <h2>Author:{authorName} </h2>
        <p>{rewContent}</p>
      </li>
    </ul>
  );
}
ReviewsList.propTypes = {
  authorName: PropTypes.string.isRequired,
  rewContent: PropTypes.string.isRequired,
};
