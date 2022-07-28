import { getCastDetails } from 'services/MovieApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastList } from 'components/CastList/CastList';
import PropTypes from 'prop-types';

export default function Cast() {
  const { movieId } = useParams();
  const [castData, setCastData] = useState([]);
  const [dataId, setDataId] = useState(undefined);

  useEffect(() => {
    if (movieId === null) {
      return;
    }
    async function getCredits() {
      try {
        const { data } = await getCastDetails(movieId);
        console.log(data);
        setDataId(data.id);
        setCastData(data.cast);
      } catch (error) {
        console.log(error);
      }
    }
    getCredits();
  }, [movieId]);
  return (
    <>
      {dataId !== undefined && (
        <>
          {castData
            .slice(0, 14)
            .map(({ id, name, character, profile_path }) => {
              return (
                <CastList
                  key={id}
                  actorName={name}
                  character={character}
                  actorPhoto={profile_path}
                />
              );
            })}
        </>
      )}
    </>
  );
}
Cast.propTypes = {
  key: PropTypes.number,
};
