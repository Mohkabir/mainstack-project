import { useState } from "react";
import { Link } from "react-router-dom";
import { LogoIcon, MenuIcon } from "../icons";
import "./Header.scss";

const Header = () => {
  const [isMenu, setIsMenu] = useState<boolean>(false);

  return (
    <div className="header">
      <div className="logo">
        <Link to="/users">
          <LogoIcon />
        </Link>
      </div>
      <div className="title">
        <h3>Dashboard</h3>
      </div>

      {/* <div className="menuBar">
        <span onClick={() => setIsMenu(true)}>
          <MenuIcon />
        </span>
      </div> */}

      {isMenu && (
        <div className="mobileNav">
          <p>
            <button type="button" onClick={() => setIsMenu(false)}>
              x
            </button>
          </p>
        </div>
      )}
    </div>
  );
};

export default Header;
