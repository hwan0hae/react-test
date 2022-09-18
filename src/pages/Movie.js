import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({ id, title, coverImg, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <Link to={`/movie/${id}`}>
        <h2>{title}</h2>
      </Link>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
      <p>{summary}</p>
    </div>
  );
}
Movie.propTypes = {
  title: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
