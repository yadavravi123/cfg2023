import React, { useState } from "react";
import "./PumpOperatorForm.css";
import Navbar from "../Components/Navbar";

const PumpOperatorForm = () => {
  const [time, setTime] = useState("");
  const [username, setusername] = useState("");
  const [chlorinated, setChlorinated] = useState("");
  const [sent, setSent] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:9000/store/pumpDetails", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          username,
          password,
          type: time,
          chlorineLevel: chlorinated,
        }),
        headers: { "Content-Type": "application/json" },
      });
      const json = await response.json();
      alert("Details updated successfully");
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      <h2 className="complaints-header">Pump Operations Report</h2>
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

          <label>
            Time of Day:{" "}
            <select
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            >
              <option value="">Select</option>
              <option value="morning">Morning</option>
              <option value="evening">Evening</option>
            </select>
          </label>

          <label>
            Has water been sent out?:{" "}
            <select
              value={sent}
              onChange={(e) => setSent(e.target.value)}
              required
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>

          <label>
            Was water chlorinated?:{" "}
            <select
              value={chlorinated}
              onChange={(e) => setChlorinated(e.target.value)}
              required
            >
              <option value="">Select</option>
              <option value="option1">Yes</option>
              <option value="option2">No</option>
            </select>
          </label>

          <button type="submit" classname="user-submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PumpOperatorForm;
