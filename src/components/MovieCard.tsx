import { Link } from "react-router-dom";
import { IMovie } from "../interfaces/IDataMovies";

type Movie = {
	data: IMovie[];
};

const MovieCard = ({ data }: Movie) => {
	return (
		<>
			{data.map((movie: IMovie) => (
				<div className="card w-80 bg-base-100 shadow-xl" key={movie.id}>
					<figure>
						<img src={movie.cover_url} alt="poster" />
					</figure>
					<div className="card-body">
						<h2 className="card-title">{movie.title}</h2>
						<p>Directed by: {movie.directed_by ? movie.directed_by : "TBA"}</p>
						<Link to={`/movies/${movie.id}`}>
							<div className="card-actions justify-end">
								<button className="btn btn-primary mt-4">Read more</button>
							</div>
						</Link>
					</div>
				</div>
			))}
		</>
	);
};

export default MovieCard;
