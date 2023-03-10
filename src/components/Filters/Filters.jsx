import { BsGiftFill, BsPuzzleFill } from "react-icons/bs";
import {
  GiAmericanFootballBall,
  GiBatMask,
  GiLevelFour,
  GiPistolGun,
  GiForestCamp,
  GiRaceCar,
} from "react-icons/gi";
import { FaChessPawn } from "react-icons/fa";

const Filters = ({ handleFilter }) => {
  return (
    <div className="Filters">
      <div className="genres">
        <h2 className="genre-title">Genres</h2>
        <div className="filters-contents">
          <div className="theme" onClick={() => handleFilter("action")}>
            <h2 className="theme-icons">
              <GiBatMask />
            </h2>
            <h2 className="theme-text">Action</h2>
          </div>
          <div className="theme" onClick={() => handleFilter("strategy")}>
            <h2 className="theme-icons">
              <FaChessPawn />
            </h2>
            <h2 className="theme-text">Strategy</h2>
          </div>
          <div className="theme" onClick={() => handleFilter("role-playing-games-rpg")}>
            <h2 className="theme-icons">
              <GiLevelFour />
            </h2>
            <h2 className="theme-text">RPG</h2>
          </div>
          <div className="theme" onClick={() => handleFilter("shooter")}>
            <h2 className="theme-icons">
              <GiPistolGun />
            </h2>
            <h2 className="theme-text">Shooter</h2>
          </div>
          <div className="theme" onClick={() => handleFilter("adventure")}>
            <h2 className="theme-icons">
              <GiForestCamp />
            </h2>
            <h2 className="theme-text">Adventure</h2>
          </div>
          <div className="theme" onClick={() => handleFilter("puzzle")}>
            <h2 className="theme-icons">
              <BsPuzzleFill />
            </h2>
            <h2 className="theme-text">Puzzle</h2>
          </div>
          <div className="theme" onClick={() => handleFilter("racing")}>
            <h2 className="theme-icons">
              <GiRaceCar />
            </h2>
            <h2 className="theme-text">Racing</h2>
          </div>
          <div className="theme" onClick={() => handleFilter("sports")}>
            <h2 className="theme-icons">
              <GiAmericanFootballBall />
            </h2>
            <h2 className="theme-text">Sports</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
