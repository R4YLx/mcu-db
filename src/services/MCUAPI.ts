import axios from "axios";

axios.defaults.baseURL =
	import.meta.env.VITE_SWAPI_BASE_URL || "https://mcuapi.herokuapp.com/api/v1/";
