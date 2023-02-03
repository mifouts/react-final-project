import "./App.css";
import Landing from "./pages/Landing";
import Nav from "./pages/Nav";
import background from "./assets/backgroundimg.png";

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
    <div className="App" style={myStyle}>
      <Nav />
      <Landing />
    </div>
  );
}

export default App;
