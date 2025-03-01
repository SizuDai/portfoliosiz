import Home from "./components/ui/home/Home";
import { Services } from "./components/ui/services/Services";
import Sidebar from "./components/ui/sidebar/Sidebar";
import Skills from "./components/ui/Skills/Skills";
import { VideoProjects } from "./components/ui/gallery/VideoProjects";
import ContactUs from "./components/ui/contactus/ContactUs";
import ScrollVideo from "./components/ui/about/ScrollVideo";
import "./App.css";
function App() {
  return (
    <>
      <Sidebar />
      <div className="main">
        <Home />
        <Skills />
        <ScrollVideo />
        <Services />
        <VideoProjects />
        <ContactUs />
      </div>
    </>
  );
}

export default App;
