// import { Link } from "react-router-dom"; // Import Link for navigation
import Nav from "./Nav"; // Nav bar component

import MusicLibrary from "./MusicLibrary"; // Music library component
import Footer from "./footer";

function Home() {
  return (
    <div className="home-container">
      <Nav /> {/* Nav bar with sign up and search */}
      <div className="home-main">
        <MusicLibrary /> {/* Music library and list of songs */}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
