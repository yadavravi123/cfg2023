import { useNavigate, Link } from "react-router-dom";
import "./Header.css";

// goToComplaintForm()
// {
//    //link to complaint form
// }

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="headerTitles">
        <br />
        <marquee style={{ color: "#003566", fontSize: "1em" }}>
          The water supply in Nagaon is scarce. Efforts are being taken to
          ensure sufficient water supply. Kindly co-operate.
        </marquee>
        <br />
        <span className="headerTitleLg">Complaint Portal</span>
        <span className="headerTitleSm">WELCOME</span>
      </div>
      <img className="headerImg" src="./water_bg.jpg" alt="" />
      <button
        style={{ marginBottom: "1rem" }}
        onClick={() => navigate("/complaint")}
      >
        Register Complaint
      </button>
    </div>
  );
}
