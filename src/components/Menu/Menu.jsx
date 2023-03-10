import { TbDeviceGamepad2 } from "react-icons/tb";
import { FiGithub } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";
import Search from "../Search/Search";

const Menu = ({ handleSearch }) => {
  return (
    <div className="Menu dp">
      <div className="menu-left dp">
        <Link to={'./'}>
          <div className="menu-logo icons-name">
            <h3>
              <TbDeviceGamepad2 />
            </h3>
            <h3 className="text">Game Zone</h3>
          </div>
        </Link>
        <Search handleSearch={handleSearch} />
      </div>
      <div className="menu-right dp">
        <a href="https://github.com/Jeremy84100">
          <div className="menu-github icons-name">
            <h3>
              <FiGithub />
            </h3>
            <h3 className="text">Jeremy84100</h3>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/j%C3%A9r%C3%A9my-bourret/">
          <div className="menu-linkedin icons-name">
            <h3>
              <AiFillLinkedin />
            </h3>
            <h3 className="text">jérémy-bourret</h3>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Menu;
