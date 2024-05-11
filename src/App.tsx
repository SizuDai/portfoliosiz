import { ThreeDCardDemo } from "./components/ui/3dcardComponent";
import Home from "./components/ui/home/Home";
import { Services } from "./components/ui/services/Services";
import Sidebar from "./components/ui/sidebar/Sidebar";
import Skills from "./components/ui/Skills/Skills";
import { Gallery } from "./components/ui/gallery/Gallery";
import { Vidgallery } from "./components/ui/gallery/Vidgallery";
import { GalleryWithCarousel } from "./components/ui/gallery/GalleryWithCarousel";
import ContactUs from "./components/ui/contactus/ContactUs";
import "./App.css";
function App() {
  return (
    <>
      <Sidebar />
      <div className="main">
        <Home />
        <Skills />
        <Services />
        <Gallery />
        <Vidgallery />
        <GalleryWithCarousel />
        <ContactUs />
      </div>
    </>
  );
}

export default App;
