import Browse from "../Browse/Browse";
import Menu from "../../components/Menu/Menu";
import axios from "axios";
import { useState, useEffect } from "react";

const Layout = () => {
  const [search, setSearch] = useState("");
  const [games, setGames] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.rawg.io/api/games?page_size=50&key=bf3dbf55bea64193b8b2567b9df19e1e`
      );
      setGames(response.data.results);
    };
    fetchData();
  }, []);

  const searchGames = async (query) => {
    const response = await axios.get(
      `https://api.rawg.io/api/games?page_size=7&key=bf3dbf55bea64193b8b2567b9df19e1e&search=${query}`
    );
    setSearchResults(response.data.results);
  };

  const handleSearch = (query) => {
    setSearch(query);
    searchGames(query);
  };

  return (
    <div>
      <Menu handleSearch={handleSearch} />
      <Browse games={searchResults.length > 0 ? searchResults : games} />
    </div>
  );
};

export default Layout;
