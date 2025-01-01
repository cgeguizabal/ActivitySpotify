import { Link } from "react-router-dom"; // Link for navigation
import "./css/nav.css";

function Nav() {
  return (
    <nav className="nav-Bar">
      <div className="nav-left">
        <img src="./assets/logo1.png" alt="logo" className="nav-logo" />
        <form>
          <div className="search">
            <span className="search-icon material-symbols-outlined">
              search
            </span>
            <input
              className="search-input"
              type="search"
              placeholder="Search"
            />
          </div>
        </form>
      </div>
      <div className="nav-right">
        <div className="nav-icons">
          <span className="nav-notification">
            <ion-icon name="notifications-outline"></ion-icon>
          </span>

          <span className="nav-setting">
            <ion-icon name="settings-outline"></ion-icon>
          </span>
        </div>
        <Link to="/signup" className="nav-button">
          Sign Up
        </Link>
      </div>

      {/* Using Link to navigate to the SignUp page */}
    </nav>
  );
}

export default Nav;
