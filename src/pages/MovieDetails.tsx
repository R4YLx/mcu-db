import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleMovie } from "../services/MCUAPI";

const MovieDetails = () => {
	const { id } = useParams();
	const { data } = useQuery(["movie", { id }], getSingleMovie);
	const navigate = useNavigate();

	console.log("id", id);
	console.log("Clicked movie", data);
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
