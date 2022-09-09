import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Navigate to="/" />} />
        <Route path="about" element={<About />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}

export default App;
