import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Homepage from "./components/pages/homepage/Homepage";
import Popular from "./components/pages/popular/Popular";
import Latest from "./components/pages/latest/Latest";
import AnimeInfo from "./components/pages/anime-info/AnimeInfo";

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
						<Route path="/popular" element={<Popular />} />
						<Route path="/anime/*" element={<AnimeInfo />} />
					</Routes>
				</BrowserRouter>
			</div>
		</div>
	);
}

export default App;