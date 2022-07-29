import { Routes, Route } from "react-router-dom";
import "./scss/App.scss";
import Movies from "./pages/Movies";
import TVShows from "./pages/TVShows";

function App() {
	return (
		<div className="App">
			<h1 className="text-3xl font-bold underline">Hello world!</h1>

			<Routes>
				<Route path="/movies" element={<Movies />} />
				<Route path="/tvshows" element={<TVShows />} />
			</Routes>
		</div>
	);
}

export default App;
