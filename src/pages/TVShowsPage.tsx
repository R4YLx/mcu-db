import { useQuery } from "@tanstack/react-query";
import { IDataTvShows } from "../interfaces/IDataTvShows";
import { getTvShows } from "../services/MCUAPI";

const TVShowsPage = () => {
	const { data, isSuccess } = useQuery(["tvshows"], getTvShows);

	console.log("TV Shows:", data?.data);

	return (
		<main className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
			{isSuccess &&
				data?.data.map((tvshow: any) => (
					<div key={tvshow.id}>
						<h3>{tvshow.title}</h3>
					</div>
				))}
		</main>
	);
};

export default TVShowsPage;
