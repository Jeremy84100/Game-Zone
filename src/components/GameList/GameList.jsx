import { Link } from "react-router-dom";

import Card from "../Card/Card";

const GameList = ({ gamesByGenre, layout }) => {
  return (
    <div className={`GameList ${layout}`}>
      {gamesByGenre.map((game) => (
        <Link key={game.id} to={`/game/${game.id}`}>
          <Card game={game} />
        </Link>
      ))}
    </div>
  );
};

export default GameList;
