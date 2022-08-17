import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleTvShowDetails from "../components/SingleTvShowDetails";
import { ITvShow } from "../interfaces/IDataTvShows";
import MCUAPI from "../services/MCUAPI";

const TvShowDetails = () => {
	const [data, setData] = useState<ITvShow>();
	const [isLoading, setIsLoading] = useState<boolean>();
	const params = useParams();

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
		<div>
			{isLoading && <h1>LOADING...</h1>}

			{data && <SingleTvShowDetails data={data} />}
		</div>
	);
};

export default TvShowDetails;