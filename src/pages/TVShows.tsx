import { useQuery } from "@tanstack/react-query";
import { getTvShows } from "../services/MCUAPI";

const TVShows = () => {
	const { data } = useQuery(["tvshows"], getTvShows);

	console.log("TV Shows:", data);
	return <div>TVShows</div>;
};

export default TVShows;
