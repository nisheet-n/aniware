import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./components/pages/homepage/Homepage";
import Popular from "./components/pages/popular/Popular";
import Latest from "./components/pages/latest/Latest";
import AnimeInfo from "./components/pages/anime-info/AnimeInfo";
import WishList from "./components/pages/wishlist/WishList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} exact />
          <Route path="/latest" element={<Latest />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/anime/*" element={<AnimeInfo />} />
          <Route path="/wishlist" element={<WishList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;