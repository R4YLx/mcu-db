import { Link } from "react-router-dom";
import { ITvShow } from "../interfaces/IDataTvShows";

type TvShow = {
	data: ITvShow[];
};
const TvShowCard = ({ data }: TvShow) => {
	return (
		<>
			{data.map((show: ITvShow) => (
				<div className="card w-80 bg-base-100 shadow-xl" key={show.id}>
					<figure>
						<img src={show.cover_url} alt="poster" />
					</figure>
					<div className="card-body">
						<h2 className="card-title">{show.title}</h2>
						<p>Directed by: {show.directed_by ? show.directed_by : "TBA"}</p>
						<Link to={`/tvshows/${show.id}`}>
							<div className="card-actions justify-end">
								<button className="btn btn-primary mt-4">Read more</button>
							</div>
						</Link>
					</div>
				</div>
			))}
		</>
	);
};

export default TvShowCard;
