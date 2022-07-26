import { Link } from 'react-router-dom';
export function AdditionalInfo() {
  return (
    <>
      <h2>Additional Information</h2>
      <ul>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </ul>
    </>
  );
}
