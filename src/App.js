import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
import Button from "./Components/Button";
import women from "./Components/women.png";
import background from "./Components/bg.png";

function App() {
  return (
    <div
      className="App"
      style={{
        background: `url(${background}) repeat 0 0`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar></Navbar>
      <h1
        className="head"
        style={{ position: "relative", top: "100px", textAlign: "center" }}
      >
        Title
      </h1>
      <Form />
      <Button />
      {/* <img
        style={{
          height: "400px",
          position: "relative",
          left: "62%",
          width: "600px",
          top: "-250px",
        }}
        src={women}
        alt=""
      /> */}
    </div>
  );
}

export default App;
