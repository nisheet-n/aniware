import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Homepage from "./components/pages/homepage/Homepage";
import Animes from "./components/pages/animes/Animes";
import Latest from "./components/pages/latest/Latest";
import AnimeInfo from "./components/pages/anime-info/AnimeInfo";
import Genres from "./components/pages/genres/Genres";
import GenreAnime from "./components/pages/genres/GenreAnime";
import Search from "./components/pages/search/Search";
import Wishlist from "./components/pages/wishlist/Wishlist";

function App() {
	return (
		<div className="App">
			<Sidebar />
			<div className="App-Display">
				<Navbar />
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Homepage />} exact />
						<Route path="/latest" element={<Latest />} />
						<Route path="/animes" element={<Animes />} />
						<Route path="/anime/*" element={<AnimeInfo />} />
						<Route path="/genres/" element={<Genres />} />
						<Route path="/genre/*" element={<GenreAnime />} />
						<Route path="/search" element={<Search />} exact />
						<Route path="/wishlist" element={<Wishlist />} exact />
					</Routes>
				</BrowserRouter>
			</div>
		</div>
	);
}

export default App;