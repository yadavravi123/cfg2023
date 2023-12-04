import React, { useEffect, useState } from "react";
import "./Complaint.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Complaint = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [problemDescription, setProblemDescription] = useState("");
  const [village, setVillage] = useState("");
  const [complaintType, setComplaintType] = useState("");
  const [districtName, setDistrictName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:9000/complaint/addcomplaint",
        {
          method: "POST",
          credentials: "include",
          body: JSON.stringify({
            name: name,
            description: problemDescription,
            type: complaintType,
            phone: phoneNumber,
            address,
            panchayat_name: village,
            assigned: "NGO",
          }),
          headers: { "Content-Type": "application/json" },
        }
      );
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    }

    setName("");
    setPhoneNumber("");
    setAddress("");
    setProblemDescription("");
    setVillage("");
    setComplaintType("");
    // setDistrictName('');
  };

  return (
    <div className="center-align-div">
      <Navbar />
      <h2 className="complaints-header">Clear your Queries!</h2>
      <div className="complaint-form">
        <form onSubmit={handleSubmit}>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label>Phone Number:</label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="eg: +91 9876543210"
            required
          />

          <label>Address:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="House number/ name, Area Name, District Name, Pincode"
            required
          />

          <label>Village Name:</label>
          <input
            type="text"
            value={village}
            onChange={(e) => setVillage(e.target.value)}
            required
          />

          <label>
            Complaint Type:{" "}
            <select
              value={complaintType}
              onChange={(e) => setComplaintType(e.target.value)}
              required
            >
              <option value="">Select</option>
              <option value="option1">Water Scarcity</option>
              <option value="option2">Unclean water</option>
              <option value="option3">Leakage</option>
            </select>
          </label>

          {/* <label>
            District Name:
            <select
              value={districtName}
              onChange={(e) => setDistrictName(e.target.value)}
              required
            >
              <option value="">Select</option>
              <option value="option1">Nagaon</option>
              <option value="option2">Dhemaji</option>
              <option value="option3">Golaghat</option>
              <option value="option4">Barpeta</option>
              <option value="option5">Majuli</option>
              <option value="option6">Other</option>
              
            </select>
          </label> */}

          <label>Description of issue faced: </label>
          <input
            type="text"
            value={problemDescription}
            onChange={(e) => setProblemDescription(e.target.value)}
            placeholder="Please describe your issue in detail here"
            required
          />

          <button type="submit" classname="user-submit-button">
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Complaint;
