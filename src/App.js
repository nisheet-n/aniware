import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./components/pages/homepage/Homepage";
import Popular from "./components/pages/popular/Popular";
import Latest from "./components/pages/latest/Latest";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} exact />
          <Route path="/latest" element={<Latest />} />
          <Route path="/popular" element={<Popular />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;