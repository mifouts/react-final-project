import "./App.css";
import Landing from "./pages/Landing";
import Nav from "./pages/Nav";
import background from "./assets/newbackground-transformed.png";

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
  return (
    <div className="App" style={myStyle}>
      <Nav />
      <Landing />
    </div>
  );
}

export default App;
