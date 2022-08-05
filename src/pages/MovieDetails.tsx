import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getSingleMovie } from "../services/MCUAPI";

const MovieDetails = () => {
	const { id } = useParams();
	const { data } = useQuery(["movie", { id }], getSingleMovie);

	console.log("id", id);
	console.log("Clicked movie", data);
	return <div>MovieDetails</div>;
};

export default MovieDetails;
