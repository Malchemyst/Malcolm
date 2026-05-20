import React from "react";
import { Hero } from "./components/Hero";
import { ThemeProvider } from "./contexts/ThemeContext";
import { CustomCursor } from "./components/CustomCursor";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#d4d0c8] dark:bg-[#1a1816] transition-colors duration-300">
        <CustomCursor />
        <Hero />
      </div>
    </ThemeProvider>
  );
}
