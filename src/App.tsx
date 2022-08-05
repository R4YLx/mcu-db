import { Routes, Route } from "react-router-dom";
import "./scss/App.scss";
import Movies from "./pages/Movies";
import TVShows from "./pages/TVShows";
import Navbar from "./components/Navbar";
import MovieDetails from "./pages/MovieDetails";
import HomePage from "./pages/HomePage";

function App() {
	return (
		<div className="App bg-gradient-to-t from-gray-900 to-zinc-900">
			<Navbar />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/movies" element={<Movies />} />
				<Route path="/tvshows" element={<TVShows />} />
				<Route path="/movies/:id" element={<MovieDetails />} />
			</Routes>
		</div>
	);
}

export default App;
