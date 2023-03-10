import { FaPlaystation, FaXbox } from "react-icons/fa";
import { AiFillAndroid, AiFillApple, AiFillStar, AiFillHeart } from "react-icons/ai";
import { RiComputerLine, RiSwitchFill } from "react-icons/ri";
import { SiPlaystationvita } from "react-icons/si";

const Card = ({ game }) => {
  const platformIcon = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return <FaPlaystation />;
      case "Xbox Series S/X":
        return <FaXbox />;
      case "PC":
        return <RiComputerLine />;
      case "Nintendo Switch":
        return <RiSwitchFill />;
      case "Android":
        return <AiFillAndroid />;
      case "iOS":
        return <AiFillApple />;
      case "PS Vita":
        return <SiPlaystationvita />;
      default:
        return null;
    }
  };

  return (
    <div className="Card">
      <div className="game">
        <div
          className="game-image"
          style={{
            backgroundImage: `url(${game.background_image})`,
          }}></div>
        <div className="game-details">
          <div className="game-top">
            <div className="game-platforms">
              {game.platforms.map(
                (platform, index) =>
                  platformIcon(platform.platform.name) && (
                    <h3 key={index} className="game-platform">
                      {platformIcon(platform.platform.name)}
                    </h3>
                  )
              )}
            </div>
            <div className="game-rating">
              <h5 id="game-star">
                <AiFillStar />
              </h5>
              <h5>{game.rating}</h5>
            </div>
          </div>
          <h2 className="game-name">{game.name}</h2>
          <div className="game-bottom">
            <h3>{game.released}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
