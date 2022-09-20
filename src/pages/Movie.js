import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Movie.css';

function Movie({ id, year, title, coverImg, summary, genres }) {
  return (
    <div className='movie'>
      <img className='movie_img' src={coverImg} alt={title} />
      <div>
        <h2 className='movie_title'>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <h3 className='movie_year'>{year}</h3>
        <ul className='movie_genres'>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
        <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
      </div>
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
