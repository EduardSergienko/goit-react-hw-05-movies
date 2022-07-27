import { getMovieReviews } from 'services/MovieApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsList } from 'components/ReviewsList/ReviewsList';
export function Reviews() {
  const { movieId } = useParams();
  const [rewData, setRewData] = useState([]);
  useEffect(() => {
    async function getReviews() {
      try {
        const { data } = await getMovieReviews(movieId);

        setRewData(data.results);

        console.log(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    if (!movieId) {
      return;
    }
    getReviews();
  }, [movieId]);
  return (
    <>
      {rewData.length !== 0 && (
        <>
          {rewData.length > 0 ? (
            <>
              {rewData.map(({ id, author, content }) => {
                return (
                  <ReviewsList
                    key={id}
                    authorName={author}
                    rewContent={content}
                  />
                );
              })}
            </>
          ) : (
            <div> We don't have any reviews for this movie</div>
          )}
        </>
      )}
    </>
  );
}
