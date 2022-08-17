import { useNavigate } from "react-router-dom";
import { IMovie } from "../interfaces/IDataMovies";

type Movie = {
	data: IMovie;
};

const SingleMovieDetails = ({ data }: Movie) => {
	const navigate = useNavigate();

	return (
		<div className="card w-auto md:w-3/5 lg:w-2/4 2xl:w-1/4 bg-base-100 shadow-xl image-full">
			<figure>
				<img src={data?.cover_url} alt="cover" className="w-screen" />
			</figure>

			<div className="card-body">
				<h2 className="card-title">{data?.title}</h2>

				<div className="divider">Synopsis</div>
				{data?.overview ? <p>{data?.overview}</p> : "TBA"}

				<div className="divider"></div>

				<ul className="grid grid-cols-1 md:grid-cols-2">
					<li className="py-2">
						<b> Release date:</b>{" "}
						{data?.release_date ? data?.release_date : "TBA"}
					</li>
					<li className="py-2">
						<b>Directed by: </b>
						{data?.directed_by ? data?.directed_by : "TBA"}
					</li>
					<li className="py-2">
						<b>Duration: </b>
						{data?.duration ? `${data?.duration} minutes` : " TBA"}
					</li>
					<li className="py-2">
						<b>Box office: </b>${data?.box_office}
					</li>
					<li className="py-2">
						<b>Post credit scenes: </b>
						{data?.post_credit_scenes}
					</li>
					<li className="py-2">
						<b>Saga: </b>
						{data?.saga}
					</li>
				</ul>

				<div className="divider">Trailer</div>
				{data?.trailer_url ? (
					<embed type="text/html" src={data?.trailer_url}></embed>
				) : (
					<p>Coming soon</p>
				)}

				<div className="divider">Related movies:</div>
				<div>
					<ul className="grid grid-cols-1 md:grid-cols-2">
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
