import React from "react";
import Home from "./pages/Home";
import { BlogProvider } from "./context/BlogContext";

function App() {
  return (
    <BlogProvider>
      <Home />
    </BlogProvider>
  );
}

export default App;