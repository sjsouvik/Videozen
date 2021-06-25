import { Link, NavLink } from "react-router-dom";

import playlist from "../../assets/playlist.svg";
import library from "../../assets/video.svg";
import login from "../../assets/user.svg";

const NavBar = () => {
  return (
    <nav className="page-navigation">
      <div className="brand">
        <Link to="/">
          <h3 className="nav-brand">VIDEOZEN</h3>
        </Link>
      </div>
      <ul className="nav-menu">
        <li className="nav-item">
          <img src={login} className="svg-icon" />
          <div className="nav-text">Login</div>
        </li>
        <li className="nav-item">
          <NavLink to="allplaylists" activeStyle={{ fontWeight: "bold" }}>
            <img src={playlist} className="svg-icon" />
            <div className="nav-text">Playlists</div>
          </NavLink>{" "}
        </li>
        <li className="nav-item">
          <NavLink to="library" activeStyle={{ fontWeight: "bold" }}>
            <img src={library} className="svg-icon" />
            <div className="nav-text">Library</div>
          </NavLink>{" "}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
