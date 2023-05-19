import "./App.css";

import NavBar from "./components/NavBar";
import Homepage from "./components/Homepage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserSignup from "./components/UserSignup";
import AdminSignup from "./components/AdminSignup";

function App() {
  return (
    <>
      <Router>
        <NavBar title={"NMS Cinemas"} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/signupuser" element={<UserSignup />} />
            <Route exact path="/signupadmin" element={<AdminSignup />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
