import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Layout from "./pages/Layout/Layout";
import GamePage from "./pages/GamePage/GamePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Layout />} />
          <Route path="/game/:id" element={<GamePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
