import { useQuery } from "@tanstack/react-query";
import MovieCard from "../components/MovieCard";
import { IMovies } from "../interfaces/IMovies";
import { getMovies } from "../services/MCUAPI";

const Movies = () => {
	const { data, isSuccess } = useQuery(["movies"], getMovies);

	console.log("Movies:", data);

	return (
		<main className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
			{isSuccess &&
				data?.data.map((movie: IMovies) => (
					<div key={movie.id}>
						{/* <MovieCard movie={movie} /> */}

						<div className="card m-8 min-h-max">
							<figure>
								<img src={movie.cover_url} alt="poster" className="w-full" />
							</figure>
							<div className="card-body bg-base-100 shadow-xl">
								<h2 className="card-title">{movie.title}</h2>
								<p className="truncate italic">"{movie.overview}"</p>
								<div className="card-actions justify-end">
									<button className="btn btn-primary mt-4">Read more</button>
								</div>
							</div>
						</div>
					</div>
				))}
		</main>
	);
};

export default Movies;
