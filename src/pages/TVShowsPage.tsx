import { useEffect, useState } from "react";
import TvShowCard from "../components/TvShowCard";
import { IDataTvShows } from "../interfaces/IDataTvShows";
import MCUAPI from "../services/MCUAPI";

const TVShowsPage = () => {
	const [data, setData] = useState<IDataTvShows>();
	const [isLoading, setIsLoading] = useState<boolean>();

	const fetchTvShows = async () => {
		setIsLoading(true);
		const mcuData = await MCUAPI.getTvShows("/tvshows");
		setData(mcuData);
		setIsLoading(false);
	};

	useEffect(() => {
		fetchTvShows();
	}, []);

	return (
		<main className="grid grid-cols-1 gap-8 py-8 justify-items-center md:grid-cols-2 lg:grid-cols-4">
			{isLoading && <h1>LOADING</h1>}

			{data && <TvShowCard data={data.data} />}
		</main>
	);
};

export default TVShowsPage;
