import { useNavigate } from "react-router-dom";
import { ITvShow } from "../interfaces/IDataTvShows";

type TvShow = {
	data: ITvShow;
};

const SingleTvShowDetails = ({ data }: TvShow) => {
	const navigate = useNavigate();
	return (
		<div className="card w-96 bg-base-100 shadow-xl image-full">
			<figure>
				<img src={data?.cover_url} alt="cover" />
			</figure>

			<div className="card-body">
				<h2 className="card-title">{data?.title}</h2>

				<div className="divider">Synopsis</div>
				{data?.overview ? <p>{data?.overview}</p> : "TBA"}

				<div className="divider"></div>

				<p>
					<b> Release date:</b>{" "}
					{data?.release_date ? data?.release_date : "TBA"}
				</p>
				<p>
					<b>Directed by: </b>
					{data?.directed_by ? data?.directed_by : "TBA"}
				</p>
				<p>
					<b>Number of seasons: </b>
					{data?.number_seasons ? `${data?.number_seasons}` : " TBA"}
				</p>
				<p>
					<b>Number of episodes: </b>
					{data?.number_episodes ? `${data?.number_episodes}` : " TBA"}
				</p>
				<p>
					<b>Saga: </b>
					{data?.saga}
				</p>

				<div className="divider">Trailer</div>
				{data?.trailer_url ? (
					<embed type="text/html" src={data?.trailer_url}></embed>
				) : (
					<p>Coming soon</p>
				)}

				<div className="card-actions justify-end">
					<button
						className="btn bg-[#ED1D24] btn-outline text-white my-4"
						onClick={() => navigate(-1)}
					>
						Back
					</button>
				</div>
			</div>
		</div>
	);
};

export default SingleTvShowDetails;
