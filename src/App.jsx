import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx"; // Home page component
import SignUpForm from "./SignUpForm"; // Sign-up form page
import "./css/queries.css";
// import MusicLibrary from "./MusicLibrary"; // Music library component/Main content
// import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route - Home page */}
        <Route path="/" element={<Home />} />

        {/* Sign up page */}
        <Route path="/signup" element={<SignUpForm />} />

        {/* You can optionally add other routes for specific song details */}
        {/* <Route path="/songs/:id" element={<SongDetails />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
