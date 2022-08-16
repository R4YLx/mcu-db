import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { IDataMovies } from "../interfaces/IDataMovies";
import MCUAPI from "../services/MCUAPI";

const MoviesPage = () => {
	const [data, setData] = useState<IDataMovies>();
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const fetchMovies = async () => {
		setIsLoading(true);
		const mcuData = await MCUAPI.getMovies("/movies");
		setData(mcuData);
		setIsLoading(false);
	};

	useEffect(() => {
		fetchMovies();
	}, []);

	return (
		<main className="grid grid-cols-1 gap-8 py-8 justify-items-center md:grid-cols-2 lg:grid-cols-4">
			{isLoading && <h1>LOADING</h1>}

			{data && <MovieCard data={data.data} />}
		</main>
	);
};

export default MoviesPage;
