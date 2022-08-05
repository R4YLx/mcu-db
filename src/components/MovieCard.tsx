import { Link } from "react-router-dom";
import { IMovies } from "../interfaces/IMovies";

const MovieCard = (movie: IMovies) => {
	console.log(movie);

	return (
		<div className="card w-96 bg-base-100 shadow-xl">
			<figure>
				<img src={movie.cover_url} alt="poster" />
			</figure>
			<div className="card-body">
				<h2 className="card-title">{movie.title}</h2>
				<p>{movie.overview}</p>
				<Link to={`/movies/${movie.id}`}>
					<div className="card-actions justify-end">
						<button className="btn btn-primary">Read more</button>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default MovieCard;
