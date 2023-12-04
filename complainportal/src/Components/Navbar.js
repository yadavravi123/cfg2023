import "./Navbar.css";
import GoogleTranslate from "./GoogleTranslate";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="top">
      <div className="topLeft">
        <h4>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            DHULIKONA
          </Link>
        </h4>
      </div>
      <div className="topRight" style={{ display: "flex", gap: "1rem" }}>
        <Link to={"/login"}>Login</Link>
        <Link to="/pump-form">Pump Operator Form</Link>
        <Link to="/quality-form">Quality Water Team Form</Link>

        <GoogleTranslate />
      </div>
    </div>
  );
}
