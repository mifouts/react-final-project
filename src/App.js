import "./App.css";
import Landing from "./pages/Landing";
import Nav from "./pages/Nav";
import background from "./assets/newbackground-transformed.png";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SelectedMovie from "./pages/SelectedMovie";
import { useState } from "react";

function App() {
  const myStyle = {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    height: "250vh",
    width: "100vw",
    marginTop: "0px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <Router>
      <div className="App" style={myStyle}>
        <Nav />
        <Landing setSelectedMovie={setSelectedMovie} />
        <Routes>
          <Route
            path="/movies/:id"
            element={<SelectedMovie selectedMovie={selectedMovie} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
