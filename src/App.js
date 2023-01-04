import ImageOne from "./components/ImageOne";
import ImageTwo from "./components/ImageTwo";
import ImageThree from "./components/ImageThree";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <ImageOne />
      <ImageTwo />
      <Gallery></Gallery>
      <ImageThree />
      <Contact />
    </div>
  );
}

export default App;
