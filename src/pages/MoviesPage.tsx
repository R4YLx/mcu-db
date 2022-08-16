import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { Link } from "react-router-dom";
import { IDataMovies, IMovie } from "../interfaces/IDataMovies";
import MCUAPI from "../services/MCUAPI";

const MoviesPage = () => {
	//const [movies, setMovies] = useState<IMovie[]>([]);
	const [data, setData] = useState<IDataMovies>();
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const fetchMovies = async () => {
		setIsLoading(true);
		const mcuData = await MCUAPI.getMovies("/movies");
		setData(mcuData);
		//setMovies(mcuData.data);
		setIsLoading(false);

		// console.log(mcuData);
	};

	useEffect(() => {
		fetchMovies();
	}, []);

	// console.log("data", data);
	//console.log("movies", movies);

	return (
		<main className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
			{isLoading && <h1>LOADING</h1>}

			{data && <MovieCard data={data.data} />}

			{/* <>
				{data &&
					data.data.map((movie: IMovie) => (
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
			</> */}
		</main>
	);
};

export default MoviesPage;
