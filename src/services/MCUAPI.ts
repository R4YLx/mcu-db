import { IDataTvShows, ITvShows } from "./../interfaces/IDataTvShows";
import { IDataMovies, IMovies } from "../interfaces/IDataMovies";

import axios from "axios";

axios.defaults.baseURL =
	import.meta.env.VITE_SWAPI_BASE_URL || "https://mcuapi.herokuapp.com/api/v1/";

/**
 * Get all movies
 */
const getMovies = async (endpoint: string) => {
	const res = await axios.get<IDataMovies>(endpoint);

	return res.data;
};

/**
 * Get all tv shows
 */
const getTvShows = async (endpoint: string) => {
	const res = await axios.get<IDataTvShows>(endpoint);

	return res.data;
};

/**
 * Get single movie
 */
export const getSingleMovie = async (id: number) => {
	const res = await axios.get<IMovies>(`/movies/${id}`);

	return res.data;
};

/**
 * Get single tv show
 */
export const getSingleTvShow = async (id: number) => {
	const res = await axios.get<ITvShows>(`/tvshows/${id}`);

	return res.data;
};

export default {
	getMovies,
	getSingleMovie,
	getTvShows,
	getSingleTvShow,
};
