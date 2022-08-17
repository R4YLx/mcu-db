import { useNavigate } from "react-router-dom";
import { IMovie } from "../interfaces/IDataMovies";

type Movie = {
	data: IMovie;
};

const SingleMovieDetails = ({ data }: Movie) => {
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
					<b>Duration: </b>
					{data?.duration ? `${data?.duration} minutes` : " TBA"}
				</p>
				<p>
					<b>Box office: </b>${data?.box_office}
				</p>
				<p>
					<b>Post credit scenes: </b>
					{data?.post_credit_scenes}
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

				<div className="divider">Related movies:</div>
				<div>
					<ul>
						{data?.related_movies?.map((rel_movie) => (
							<li key={rel_movie.id} className="list-disc list-inside">
								{rel_movie.title}
							</li>
						))}
					</ul>
				</div>
				<div className="card-actions justify-end">
					<button className="btn btn-primary my-4" onClick={() => navigate(-1)}>
						Back
					</button>
				</div>
			</div>
		</div>
	);
};

export default SingleMovieDetails;
