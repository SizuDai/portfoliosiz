import React from "react";
import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import CustomCursor from "./components/CustomCursor";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";
import BlogIndex from "./components/Blog/BlogIndex";
import BlogPost from "./components/Blog/BlogPost";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";

const App2: React.FC = () => {
  return (
    <div className="bg-dark min-h-screen text-zinc-100 selection:bg-white selection:text-black relative">
      <Helmet>
        <title>Sizan Smith Lamichhane | Motion Graphics Designer & VFX Artist</title>
        <meta
          name="description"
          content="Portfolio of Sizan Smith Lamichhane (Sizzler Fx). Expert Motion Graphics Designer utilizing AI Agentic Workflows to create stunning visuals."
        />
        <meta name="keywords" content="Motion Graphics, VFX, AI Agents, ComfyUI, After Effects, Sizzler Fx, Nepal" />
      </Helmet>
      <div className="grain"></div>
      <CustomCursor />

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
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </main>
    </div>
  );
};

export default App2;
