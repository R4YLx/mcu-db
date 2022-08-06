import { IDataTvShows } from "./../interfaces/IDataTvShows";
import { IDataMovies } from "../interfaces/IDataMovies";

import axios from "axios";

axios.defaults.baseURL =
	import.meta.env.VITE_SWAPI_BASE_URL || "https://mcuapi.herokuapp.com/api/v1/";

const get = async (endpoint: string) => {
	const response = await axios.get<IDataMovies | IDataTvShows>(endpoint);

	return response.data;
};

/**
 * Get movies
 */
export const getMovies = async ({ queryKey }: any) => {
	const [_key] = queryKey;
	return get("/movies");
};

/**
 * Get single movie
 */
export const getSingleMovie = async ({ queryKey }: any) => {
	const [_key, { id }] = queryKey;
	return get(`/movies/${id}/`);
};

/**
 * Get tv show
 */
export const getTvShows = async ({ queryKey }: any) => {
	const [_key] = queryKey;
	return get("/tvshows");
};

/**
 * Get single tv show
 */
export const getSingleTvShow = async ({ queryKey }: any) => {
	const [_key, { id }] = queryKey;
	return get(`/tvshows/${id}/`);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	getMovies,
	getSingleMovie,
	getTvShows,
	getSingleTvShow,
};
