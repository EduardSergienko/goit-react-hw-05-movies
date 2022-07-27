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
