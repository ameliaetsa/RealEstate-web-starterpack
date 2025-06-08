import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./App.css";
import Desc from "./components/Desc/Desc";
import Contact from "./components/Contact/Contact";
import Fasilitas from "./components/Fasilitas/Fasilitas";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Desc />
      <Fasilitas />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
