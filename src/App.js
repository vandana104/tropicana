import Authentication from "./Components/Authentication";
import Footer from "./Components/Footer";
import HomePage from "./Components/HomePage";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/signUp" element={<Authentication />} />
        <Route path="/login" element={<Authentication />} />
        <Route path="/verify" element={<Authentication />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
