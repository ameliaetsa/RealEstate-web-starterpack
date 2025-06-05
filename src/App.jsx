import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./App.css"; // Assuming you have a CSS file for styling
import Desc from "./components/Desc/Desc";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Desc />
    </div>
  );
}

export default App;
