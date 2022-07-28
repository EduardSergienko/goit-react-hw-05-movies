import styles from './CastList.module.scss';
import PropTypes from 'prop-types';
export function CastList({ actorName, character, actorPhoto }) {
  let src = `https://image.tmdb.org/t/p/original${actorPhoto}`;
  if (actorPhoto === null) {
    src =
      'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png';
  }
  return (
    <ul>
      <li>
        <img className={styles.profileImg} src={src} alt="" />

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
