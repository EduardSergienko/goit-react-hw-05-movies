import styles from './CastList.module.scss';
import PropTypes from 'prop-types';
export function CastList({ actorName, character, actorPhoto }) {
  return (
    <ul>
      <li>
        <img
          className={styles.profileImg}
          src={`https://image.tmdb.org/t/p/original${actorPhoto}`}
          alt=""
        />

        <p>{actorName}</p>
        <p> Character: {character}</p>
      </li>
    </ul>
  );
}
CastList.propTypes = {
  actorName: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  actorPhoto: PropTypes.string,
};
