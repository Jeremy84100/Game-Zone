import { useEffect, useState } from "react";

import Sort from "../../components/Sort/Sort";
import Filters from "../../components/Filters/Filters";
import GameList from "../../components/GameList/GameList";

const Browse = (props) => {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [gamesByGenre, setGamesByGenre] = useState([]);
  const [layout, setLayout] = useState("cols");

  const { games } = props;

  const handleFilter = async (genre) => {
    const url = `https://api.rawg.io/api/games?page_size=50&key=bf3dbf55bea64193b8b2567b9df19e1e${genre !== "" ? `&genres=${genre}` : ""}`;
    
    const response = await fetch(url);
    const data = await response.json();
    const gamesForGenre = data.results;
    
    setGamesByGenre(gamesForGenre);
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
