import logo from "./logo.svg";
import "./App.css";
import TopBar from "./components/Topbar";

function App() {
  return (
    <>
      <TopBar />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p> Hola Mundo</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
