import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;
