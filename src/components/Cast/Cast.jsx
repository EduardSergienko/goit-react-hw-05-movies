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
      const { data } = await getCastDetails(movieId);
      setCastData(data.cast);
    }
    getCredits();
  }, [movieId]);
  return (
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
  );
  // ;
}

// export function Cast() {
//   return (
//     <div>
//       <img src="" alt="" />
//       <p>name</p>
//       <p>cast</p>
//     </div>
//   );
// }
