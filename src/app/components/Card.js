
import Image from "next/image";
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";

export default function Card({ result, onDelete }) {
  return (
    <div style={{ width: "20rem", maxHeight: "34rem", backgroundColor: "black" }} className="card mb-3">
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          width={500}
          height={300}
          className="card-img-top"
          alt=""
        />
        <div className="card-body bg-dark">
          <p className="card-text text-truncate text-success fs-5">
            {result.overview}
          </p>
          <h5 className="card-title fs-4">{result.title || result.name}</h5>
          <div className="card-text jhunya">
            <small className="text-danger">
              {result.release_date || result.first_air_date}
            </small>
            <p className="cdtext">
              <FiThumbsUp className="ml-2 text-light" />
              <span className="ml-1 text-light">{result.vote_count}</span>
            </p>
          </div>
        </div>
      </Link>
      <MdDeleteForever
        onClick={() => onDelete(result.id)}
        style={{ color: "red", width: "2rem", height: "2rem", cursor: "pointer" }}
      />
    </div>
  );
}



