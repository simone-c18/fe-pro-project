import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Landing />} /> 
        <Route path="/register" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
