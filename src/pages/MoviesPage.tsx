import { useEffect, useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import MovieCard from "../components/MovieCard";
import { IDataMovies } from "../interfaces/IDataMovies";
import MCUAPI from "../services/MCUAPI";

const MoviesPage = (): JSX.Element => {
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
		<>
			<div className="flex justify-center items-center">
				{isLoading && <LoadingSpinner />}
			</div>

			<main className="grid grid-cols-1 gap-8 py-8 px-8 justify-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
				{data && <MovieCard data={data.data} />}
			</main>
		</>
	);
};

export default MoviesPage;
