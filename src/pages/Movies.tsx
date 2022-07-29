import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../services/MCUAPI";

const Movies = () => {
	const { data } = useQuery(["movies"], getMovies);

	console.log("Movies:", data);
	return <div>Movies</div>;
};

export default Movies;
