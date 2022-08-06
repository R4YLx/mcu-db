import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import { IMovies } from "../interfaces/IDataMovies";
import { getMovies } from "../services/MCUAPI";

const MoviesPage = () => {
	const { data, isSuccess } = useQuery(["movies"], getMovies);

	console.log("Movies:", data);

	return (
		<main className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
			{isSuccess &&
				data?.data.map((movie: any) => (
					<div key={movie.id}>
						{/* <MovieCard movie={movie} /> */}

						<div className="card m-8 min-h-max">
							<figure>
								<img src={movie.cover_url} alt="poster" className="w-full" />
							</figure>
							<div className="card-body bg-base-100 shadow-xl">
								<h2 className="card-title">{movie.title}</h2>
								<p className="truncate italic">Synopsis: {movie.overview}</p>
								<Link to={`/movies/${movie.id}`}>
									<div className="card-actions justify-end">
										<button className="btn bg-[#ED1D24] btn-outline text-white mt-4">
											Read more
										</button>
									</div>
								</Link>
							</div>
						</div>
					</div>
				))}
		</main>
	);
};

export default MoviesPage;
