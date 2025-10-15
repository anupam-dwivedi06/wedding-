import Home from "./Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Photoalbum from "./Components/Photoalbum/photoal1/Photoalbum"; 
import Photoalbum2 from "./Components/Photoalbum/Photoalbum2/Photoalbum2"
import Photoalbum3 from "./Components/Photoalbum/Photoalbum3/Photoalbum3"
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
          <Route path="/photgallery2" element={<Photoalbum2 />} />
          <Route path="/photgallery3" element={<Photoalbum3 />} />
          <Route path="/navabout" element={< NavAbout />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
