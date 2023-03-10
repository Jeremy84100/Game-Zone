import { useEffect, useState } from "react";
import axios from "axios";

import Sort from "../../components/Sort/Sort";
import Filters from "../../components/Filters/Filters";
import GameList from "../../components/GameList/GameList";

const Browse = ({ games }) => {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [gamesByGenre, setGamesByGenre] = useState([]);
  const [layout, setLayout] = useState("cols");

  const handleFilter = async (genre) => {
    let url = `https://api.rawg.io/api/games?page_size=50&key=bf3dbf55bea64193b8b2567b9df19e1e`;
    if (genre !== "") {
      url += `&genres=${genre}`;
    }
    const response = await axios.get(url);
    setGamesByGenre(response.data.results);
    setSelectedGenre(genre);
  };

  const handleLayoutClick = (newLayout) => {
    setLayout(newLayout);
  };

  useEffect(() => {
    setGamesByGenre(games);
  }, [games]);

  return (
    <div className="Browse">
      <Filters handleFilter={handleFilter} />
      <Sort
        selectedGenre={selectedGenre}
        handleFilter={handleFilter}
        handleLayoutClick={handleLayoutClick}
      />
      <GameList gamesByGenre={gamesByGenre} layout={layout} />
    </div>
  );
};

export default Browse;
