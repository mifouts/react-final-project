import "./App.css";
import Landing from "./pages/Landing";
import Nav from "./pages/Nav";
import background from "./assets/backgroundimg.png";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const myStyle = {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    height: "100vh",
    width: "100vw",
    marginTop: "0px",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  };
  return (
    <Router>
      <div className="App" style={myStyle}>
        <Routes>
          <Nav />
          <Landing />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
