import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IMovie } from "../interfaces/IDataMovies";
import MCUAPI from "../services/MCUAPI";

type DataDetails = {
	id: number;
};

const MovieDetails = () => {
	const [data, setData] = useState<IMovie>();
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const params = useParams();
	const navigate = useNavigate();

	const fetchSingleMovie = async () => {
		setIsLoading(true);
		const movieData = await MCUAPI.getSingleMovie(Number(params.id));
		setData(movieData);
		setIsLoading(false);
	};

	useEffect(() => {
		fetchSingleMovie();
	}, []);

	return (
		<div>
			<div className="card w-96 bg-base-100 shadow-xl image-full">
				<figure>
					<img src={data?.cover_url} alt="cover" />
				</figure>
				<div className="card-body">
					<h2 className="card-title">{data?.title}</h2>
					<p>
						<b> Synopsis: </b>
						<br /> {data?.overview}
					</p>
					<p>
						<b> Release date:</b> {data?.release_date}
					</p>
					<p>
						<b>Directed by: </b>
						{data?.directed_by}{" "}
					</p>
					<p>
						<b>Duration: </b>
						{data?.duration}{" "}
					</p>

					<div>
						<p>
							<b>Related movies:</b>
						</p>
						<ul></ul>
					</div>
					<div className="card-actions justify-end">
						<button
							className="btn bg-[#ED1D24] btn-outline text-white"
							onClick={() => navigate(-1)}
						>
							Back
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MovieDetails;
