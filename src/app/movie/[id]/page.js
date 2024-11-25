
import Image from 'next/image';

const API_KEY = "76524c646e5fee3a1b1d217d809e2aa9";

export default async function MoviePage({ params }) {
  // Await the params object
  const { id: movieId } = await params;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  const movie = await res.json();

  return (
    <div className="container text-light">
      <div className="row py-4 jhuni">
        <div className="col-md-6">
          <Image
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path
              }`}
            width={500}
            height={300}
            className="img-fluid rounded"
            style={{ maxWidth: '100%', height: 'auto' }}
            alt="Image"
          />
        </div>
        <div className="col-md-6">
          <h2 className="h4 mb-3 font-weight-bold fs-2 text-primary">
            {movie.title || movie.name}
          </h2>
          <p className="mb-3 fs-5 text-success fw-semibold">{movie.overview}</p>
          <p className="mb-3">
            <span className="font-weight-semibold me-2 fs-5 text-warning">
              Date Released:
            </span>
            <span className='ml-4'>{movie.release_date || movie.first_air_date}</span>
          </p>
          <p className="mb-3">
            <span className="font-weight-semibold me-2 fs-5 text-danger">
              Rating:
            </span>
            <span>{movie.vote_count}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
