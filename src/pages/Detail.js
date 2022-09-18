import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(true);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    setMovie(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <img alt={movie.title} src={movie.medium_cover_image} />
          {console.log(movie)}
          <h2>{movie.title_long}</h2>
          <ul>
            {movie.genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
          <p>상영시간: {movie.runtime}분</p>
          <p>평점 10/{movie.rating}점</p>
        </div>
      )}
    </div>
  );
}

export default Detail;
