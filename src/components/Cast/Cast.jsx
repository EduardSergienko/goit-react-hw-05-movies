import { getCastDetails } from 'services/MovieApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastList } from 'components/CastList/CastList';

export function Cast() {
  const { movieId } = useParams();
  const [castData, setCastData] = useState([]);

  console.log(castData);

  useEffect(() => {
    if (movieId === null) {
      return;
    }
    async function getCredits() {
      try {
        const { data } = await getCastDetails(movieId);
        setCastData(data.cast);
      } catch (error) {
        console.log(error);
      }
    }
    getCredits();
  }, [movieId]);
  return (
    <>
      {castData !== [] && (
        <>
          {castData.map(({ id, name, character, profile_path }) => {
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
