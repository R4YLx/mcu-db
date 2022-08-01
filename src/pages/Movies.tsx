import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../services/MCUAPI";

const Movies = () => {
	const { data, isSuccess } = useQuery(["movies"], getMovies);

	console.log("Movies:", data);

	return (
		<div>
			{isSuccess &&
				data.map((movie: any) => <div key={movie.id}>{movie.title}</div>)}
		</div>
	);
};

export default Movies;
