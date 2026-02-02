import React from "react";
import { Routes, Route } from "react-router-dom";
import CustomCursor from "./components/CustomCursor";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import PrivacyPolicy from "./components/PrivacyPolicy";

const App2: React.FC = () => {
  return (
    <div className="bg-dark min-h-screen text-zinc-100 selection:bg-white selection:text-black relative">
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
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </main>
    </div>
  );
};

export default App2;
