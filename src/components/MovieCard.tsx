import { Link } from "react-router-dom";
import { IMovie } from "../interfaces/IDataMovies";

type Movie = {
	data: IMovie[];
};

const MovieCard = ({ data }: Movie) => {
	console.log("Movies in array:", data);

	return (
		<div>
			{data.map((movie: IMovie) => (
				<div className="card w-96 bg-base-100 shadow-xl" key={movie.id}>
					<h1>{movie.title}</h1>
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
			))}
		</div>
	);
};

export default MovieCard;
