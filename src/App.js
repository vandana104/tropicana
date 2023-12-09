import Dropdown from "./Components/Dropdown";
import Footer from "./Components/Footer";
import HomePage from "./Components/HomePage";
import Navbar from "./Components/Navbar";
import Section2 from "./Components/Section2";
import SignUp from "./Components/SignUp";
import Verification from "./Components/Verification";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="relative">
      <Navbar />
      {/* <Section2/> */}
      
     
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/signup" exact element={<SignUp />} />
        <Route path="/verification" exact element={<Verification />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
