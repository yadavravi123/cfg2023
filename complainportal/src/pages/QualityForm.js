import React, { useState } from "react";
import "./QualityForm.css";
import Navbar from "../Components/Navbar";

const QualityForm = () => {
  // username, password, waterQualityLevel, panchayatArea, schemeID
  const [schemeID, setschemeID] = useState("");
  const [waterLevel, setWaterLevel] = useState("");
  const [panchayatArea, setpanchayatArea] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:9000/store/waterTeam", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          username,
          password,
          waterQualityLevel: waterLevel,
          panchayatArea,
          schemeID,
        }),
        headers: { "Content-Type": "application/json" },
      });
      const json = await response.json();
      alert("Details updated successfully");
      console.log(json);
    } catch (error) {
      console.log(error);
    }

    setschemeID("");
    setWaterLevel("");
  };

  return (
    <div className="center-align-div">
      <Navbar />
      <h2 className="complaints-header">Water Quality Survey</h2>
      <div className="complaint-form">
        <form onSubmit={handleSubmit}>
          <label>Username: </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            required
          />
          <label>Password: </label>
          <input
            type="text"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            required
          />
          <label>Scheme ID: </label>
          <input
            type="text"
            value={schemeID}
            onChange={(e) => setschemeID(e.target.value)}
            required
          />

          <label>
            Water Quality Level Recorded:
            <input
              type="text"
              value={waterLevel}
              onChange={(e) => setWaterLevel(e.target.value)}
              required
            />
          </label>

          <label>
            Panchayat Area:
            <input
              type="text"
              value={panchayatArea}
              onChange={(e) => setpanchayatArea(e.target.value)}
              required
            />
          </label>

          <button type="submit" classname="user-submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default QualityForm;
