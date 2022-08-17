import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import SingleTvShowDetails from "../components/SingleTvShowDetails";
import { ITvShow } from "../interfaces/IDataTvShows";
import MCUAPI from "../services/MCUAPI";

const TvShowDetails = (): JSX.Element => {
	const [data, setData] = useState<ITvShow>();
	const [isLoading, setIsLoading] = useState<boolean>();
	const params = useParams<string>();

	const fetchSingleTvShow = async () => {
		setIsLoading(true);
		const movieData = await MCUAPI.getSingleTvShow(Number(params.id));
		setData(movieData);
		setIsLoading(false);
	};

	useEffect(() => {
		fetchSingleTvShow();
	}, []);

	return (
		<div className="flex justify-center content-center md:py-8">
			{isLoading && <LoadingSpinner />}

			{data && <SingleTvShowDetails data={data} />}
		</div>
	);
};

export default TvShowDetails;
