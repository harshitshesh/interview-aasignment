import React from "react";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <div>
      <Navbar />

      <main className="max-w-7xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4 text-black">Demo content</h1>
        <p className="text-black/80">
          the navbar. Hover on 'Solutions'  to open the menu.
        </p>

        <div style={{ height: 800 }}></div>
      </main>
    </div>
  );
}
