import React from "react";
import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";
import UpdatesIndex from "./components/Updates/UpdatesIndex";
import UpdatePost from "./components/Updates/UpdatePost";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import Footer from "./components/Footer";

const App2: React.FC = () => {
  return (
    <div className="bg-dark min-h-screen text-zinc-100 selection:bg-white selection:text-black relative">
      <Helmet>
        <title>Sizan Smith Lamichhane | Motion Graphics Designer & VFX Artist</title>
        <meta
          name="description"
          content="Portfolio of Sizan Smith Lamichhane (Sizzler Fx). Expert Motion Graphics Designer utilizing advanced workflows to create stunning visuals."
        />
        <meta name="keywords" content="Motion Graphics, VFX, After Effects, Sizzler Fx, Nepal, Design" />
      </Helmet>
      <div className="grain"></div>
      <CustomCursor />
      <Navbar />

      <main className="flex flex-col relative z-20">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Projects />
              </>
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/updates" element={<UpdatesIndex />} />
          <Route path="/updates/:slug" element={<UpdatePost />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App2;
