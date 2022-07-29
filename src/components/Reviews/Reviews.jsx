import { getMovieReviews } from 'services/MovieApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsList } from 'components/ReviewsList/ReviewsList';

export default function Reviews() {
  const { movieId } = useParams();
  const [rewData, setRewData] = useState(null);
  useEffect(() => {
    if (!movieId) {
      return;
    }
    async function getReviews() {
      try {
        const { data } = await getMovieReviews(movieId);

        setRewData(data.results);

        console.log(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    getReviews();
  }, [movieId]);
  if (!rewData) {
    return;
  }
  return (
    <>
      {rewData.length > 0 ? (
        <ul>
          {rewData.map(({ id, author, content }) => {
            return (
              <ReviewsList key={id} authorName={author} rewContent={content} />
            );
          })}
        </ul>
      ) : (
        <div> We don't have any reviews for this movie</div>
      )}
    </>
  );
}
