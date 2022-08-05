import { useQuery } from "@tanstack/react-query";
import { getTvShows } from "../services/MCUAPI";

const TVShowsPage = () => {
	const { data } = useQuery(["tvshows"], getTvShows);

	console.log("TV Shows:", data);
	return <div>TVShowsPage</div>;
};

export default TVShowsPage;
