import "./App.css";
import Home from "./pages/Home";
import PumpOperatorForm from "./pages/PumpOperatorForm";
import Complaint from "./pages/Complaint";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QualityForm from "./pages/QualityForm";
import BasicTable from "./Components/BasicTable";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/complaint" element={<Complaint />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/pump-form" element={<PumpOperatorForm />} />
        <Route path="/quality-form" element={<QualityForm />} />
        <Route path="/allcomplaints" element={<BasicTable />} />
      </Routes>
    </Router>
  );
}

export default App;
