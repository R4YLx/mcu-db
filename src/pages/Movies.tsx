import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../services/MCUAPI";

const Movies = () => {
	const { data, isSuccess } = useQuery(["movies"], getMovies);

	console.log("Movies:", data);

	console.log(typeof data);

	// let allMyMovies = data[0].map((movie) => {
	// 	return (
	// 		<div>
	// 			<p>{movie.title}</p>
	// 		</div>
	// 	);
	// });

	return (
		// <div>{isSuccess && data.map((movie) => <div>{movie.title}</div>)}</div>
		<div>
			<p>Tjena</p>
			{/* {allMyMovies} */}
		</div>
	);
};

export default Movies;
