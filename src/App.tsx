import { Routes, Route } from "react-router-dom";
import "./scss/App.scss";
import MoviesPage from "./pages/MoviesPage";
import TVShowsPage from "./pages/TVShowsPage";
import Navbar from "./components/Navbar";
import MovieDetails from "./pages/MovieDetails";
import HomePage from "./pages/HomePage";
import TvShowDetails from "./pages/TvShowDetails";

function App(): JSX.Element {
	return (
		<div className="App bg-gradient-to-t from-gray-900 to-zinc-900 min-h-screen h-full">
			<Navbar />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/movies" element={<MoviesPage />} />
				<Route path="/tvshows" element={<TVShowsPage />} />
				<Route path="/movies/:id" element={<MovieDetails />} />
				<Route path="/tvshows/:id" element={<TvShowDetails />} />
			</Routes>
		</div>
	);
}

export default App;
