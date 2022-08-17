import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import SingleMovieDetails from "../components/SingleMovieDetails";
import { IMovie } from "../interfaces/IDataMovies";
import MCUAPI from "../services/MCUAPI";

const MovieDetails = (): JSX.Element => {
	const [data, setData] = useState<IMovie>();
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const params = useParams<string>();

	const fetchSingleMovie = async () => {
		setIsLoading(true);
		const movieData = await MCUAPI.getSingleMovie(Number(params.id));
		setData(movieData);
		setIsLoading(false);
	};

	useEffect(() => {
		fetchSingleMovie();
	}, []);

	return (
		<div className="flex justify-center content-center md:py-8">
			{isLoading && <LoadingSpinner />}

			{data && <SingleMovieDetails data={data} />}
		</div>
	);
};

export default MovieDetails;
