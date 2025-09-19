import Home from "./Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Photoalbum from "./Components/Photoalbum/photoal1/Photoalbum";
import NavAbout from "./Components/NavAbout/NavAbout";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/photogallery" element = {<Photoalbum/>}/>
          <Route path="/navabout" element={< NavAbout />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
