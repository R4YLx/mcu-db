import { useQuery } from "@tanstack/react-query";
import MovieCard from "../components/MovieCard";
import { IMovies } from "../interfaces/IMovies";
import { getMovies } from "../services/MCUAPI";

const Movies = () => {
	const { data, isSuccess } = useQuery(["movies"], getMovies);

	console.log("Movies:", data);

	return (
		<>
			{isSuccess &&
				data?.data.map((movie: IMovies) => (
					<div key={movie.id}>
						{/* <MovieCard movie={movie} /> */}

						<div className="card w-96 bg-base-100 shadow-xl">
							<figure>
								<img src={movie.cover_url} alt="poster" />
							</figure>
							<div className="card-body">
								<h2 className="card-title">{movie.title}</h2>
								{/* <p>{movie.overview}</p> */}
								<div className="card-actions justify-end">
									<button className="btn btn-primary">Read more</button>
								</div>
							</div>
						</div>
					</div>
				))}
		</>
	);
};

export default Movies;
