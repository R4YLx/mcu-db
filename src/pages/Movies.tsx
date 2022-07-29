import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../services/MCUAPI";

const Movies = () => {
	const {} = useQuery(["movies"], getMovies);
	return <div>Movies</div>;
};

export default Movies;
