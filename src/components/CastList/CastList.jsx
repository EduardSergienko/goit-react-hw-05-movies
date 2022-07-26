import styles from './CastList.module.scss';

export function CastList({ actorName, character, actorPhoto }) {
  return (
    <ul>
      <li>
        <img
          className={styles.profileImg}
          src={`https://image.tmdb.org/t/p/w500${actorPhoto}`}
          alt=""
        />

        <p>{actorName}</p>
        <p> Character: {character}</p>
      </li>
    </ul>
  );
}
