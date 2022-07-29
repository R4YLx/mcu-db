import axios from "axios";

axios.defaults.baseURL =
	import.meta.env.VITE_SWAPI_BASE_URL || "https://mcuapi.herokuapp.com/api/v1/";

const get = async (endpoint: string) => {
	const response = await axios.get(endpoint);

	return response.data;
};

const getResource = async (resource: string, id = null) => {
	return get(`/${resource}/${id}`);
};

/**
 * Get movies
 */
export const getMovies = async ({ queryKey }: any) => {
	const [_key] = queryKey;
	return getResource("movies");
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
	return getResource("tvshows");
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
