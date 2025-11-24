import React from "react";
import CustomCursor from "./components/CustomCursor";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

const App2: React.FC = () => {
  return (
    <div className="bg-dark min-h-screen text-zinc-100 selection:bg-white selection:text-black relative">
      <div className="grain"></div>
      <CustomCursor />

      <main className="flex flex-col relative z-20">
        <Hero />
        <Projects />
      </main>
    </div>
  );
};

export default App2;
