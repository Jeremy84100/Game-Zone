import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { AiOutlineArrowLeft } from "react-icons/ai";

const GamePage = () => {
  const { id } = useParams();
  const [gameDetails, setGameDetails] = useState({});
  const [gameScreenshots, setGameScreenshots] = useState([]);
  const [showDescription, setShowDescription] = useState(false);
  const [selectedImage, setSelectedImage] = useState(
    gameDetails.background_image
  );

  useEffect(() => {
    const fetchGameDetails = async () => {
      const response = await axios.get(
        `https://api.rawg.io/api/games/${id}?key=bf3dbf55bea64193b8b2567b9df19e1e`
      );
      setGameDetails(response.data);
    };
    fetchGameDetails();
  }, [id]);

  useEffect(() => {
    const fetchGameScreenshots = async () => {
      const response = await axios.get(
        `https://api.rawg.io/api/games/${id}/screenshots?key=bf3dbf55bea64193b8b2567b9df19e1e`
      );
      setGameScreenshots(response.data);
    };
    fetchGameScreenshots();
  }, [id]);

  const descriptionLength = gameDetails.description_raw
    ? gameDetails.description_raw.length
    : 0;

  const description = gameDetails.description_raw
    ? showDescription
      ? gameDetails.description_raw
      : gameDetails.description_raw.slice(0, 300) + "..."
    : "";

  const handleShowMore = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="GamePage">
      <div className="GamePage-top">
        <div className="GamePage-return">
          <Link to="../">
            <h1>
              <AiOutlineArrowLeft />
            </h1>
          </Link>
        </div>

        <div className="GamePage-title">
          <h1>{gameDetails.name}</h1>
        </div>
      </div>
      <div className="gameDetails-contener">
        <div className="gameDetails-left">
          <div
            className="gameDetails-image"
            style={{
              backgroundImage: selectedImage
                ? `url(${selectedImage})`
                : `url(${gameDetails.background_image})`,
            }}></div>
          {gameScreenshots.results && (
            <div className="gameDetails-images-additional">
              <div
                className={`gameDetails-image-additional ${
                  selectedImage === gameDetails.background_image
                    ? "activelink"
                    : ""
                }`}
                style={{
                  backgroundImage: `url(${gameDetails.background_image})`,
                }}
                onClick={() =>
                  setSelectedImage(gameDetails.background_image)
                }></div>
              {gameScreenshots.results.slice(0, 5).map((screenshot) => (
                <div
                  key={screenshot.id}
                  className={`gameDetails-image-additional ${
                    selectedImage === screenshot.image ? "activelink" : ""
                  }`}
                  style={{
                    backgroundImage: `url(${screenshot.image})`,
                  }}
                  onClick={() => setSelectedImage(screenshot.image)}></div>
              ))}
            </div>
          )}
        </div>
        <div className="gameDetails-right">
          <div className="gameDetails-about">
            <div className="gameDetails-about-name">
              <h2>About</h2>
            </div>
            <div className="gameDetails-about-description">
              <p>{description}</p>
              {descriptionLength >= 300 &&
                gameDetails.description_raw &&
                gameDetails.description_raw.length > 100 && (
                  <button onClick={handleShowMore}>
                    {showDescription ? "Show less" : "Show more"}
                  </button>
                )}
            </div>
          </div>
          <div className="gameDetails-details">
            <div className="gameDetails-details-block">
              <div className="gameDetails-details-title">
                <p>Genre</p>
              </div>
              <div className="gameDetails-details-text">
                <p>
                  {gameDetails.genres &&
                    gameDetails.genres.map((genre) => genre.name).join(", ")}
                </p>
              </div>
            </div>
            <div className="gameDetails-details-block">
              <div className="gameDetails-details-title">
                <p>Plateformes</p>
              </div>
              <div className="gameDetails-details-text">
                <p>
                  {gameDetails.platforms &&
                    gameDetails.platforms
                      .map((platform) => platform.platform.name)
                      .join(", ")}
                </p>
              </div>
            </div>
            <div className="gameDetails-details-block">
              <div className="gameDetails-details-title">
                <p>Note</p>
              </div>
              <div className="gameDetails-details-text">
                <p>{gameDetails.rating}</p>
              </div>
            </div>
            <div className="gameDetails-details-block">
              <div className="gameDetails-details-title">
                <p>Release date</p>
              </div>
              <div className="gameDetails-details-text">
                <p>{gameDetails.released}</p>
              </div>
            </div>
            <div className="gameDetails-details-block">
              <div className="gameDetails-details-title">
                <p>Developers</p>
              </div>
              <div className="gameDetails-details-text">
                <p>
                  {gameDetails.developers &&
                    gameDetails.developers
                      .map((developer) => developer.name)
                      .join(", ")}
                </p>
              </div>
              <div className="gameDetails-details-title">
                <p>rating</p>
              </div>
              <div className="gameDetails-details-text">
                <p>{gameDetails.esrb_rating && gameDetails.esrb_rating.name}</p>
              </div>
            </div>
            <div className="gameDetails-details-block gameDetails-details-block-wild">
              <div className="gameDetails-details-title">
                <p>Tags</p>
              </div>
              <div className="gameDetails-details-text">
                <p>
                  {gameDetails.tags &&
                    gameDetails.tags.map((tag) => tag.name).join(", ")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default GamePage;
