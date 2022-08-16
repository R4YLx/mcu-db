import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleMovieDetails from "../components/SingleMovieDetails";
import { IMovie } from "../interfaces/IDataMovies";
import MCUAPI from "../services/MCUAPI";

const MovieDetails = () => {
	const [data, setData] = useState<IMovie>();
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const params = useParams();

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
		<div>
			{isLoading && <h1>LOADING...</h1>}

			{data && <SingleMovieDetails data={data} />}
		</div>
	);
};

export default MovieDetails;
