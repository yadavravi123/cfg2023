import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Register = (props) => {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [panchayatArea, setPanchayatArea] = useState("");
  const [scheme, setScheme] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(type);
    try {
      const response = await fetch("http://localhost:9000/auth/register/", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          name,
          address,
          phone,
          panchayatArea,
          username,
          password: pass,
          type,
          schemeID: scheme,
        }),
        headers: { "Content-Type": "application/json" },
      });
      const json = await response.json();
      alert("Successfully registered");
      if (type === "admin") window.location.href = "/allcomplaints";
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="register">
      <div className="auth-form-container">
        <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <select onChange={(e) => setType(e.target.value)} name="type">
            <option value="pumpOperator">pump operator</option>
            <option value="waterQuality">water quality monitoring team</option>
            <option value="waterUser">water user team</option>
            <option value="admin">Admin</option>
          </select>
          <label htmlFor="name">Full name</label>
          <input
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
            id="name"
            placeholder="full Name"
          />
          <label htmlFor="email">email</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="john"
            id="email"
            name="email"
          />
          <label htmlFor="password">password</label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="********"
            id="password"
            name="password"
          />
          <label htmlFor="phone">phone</label>

          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            placeholder="9999999999"
            id="phone"
            name="phone"
          />
          <label htmlFor="address">address</label>

          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            placeholder="XYZ"
            id="address"
            name="address"
          />
          <label htmlFor="panchayatArea">Panchayat Area</label>

          <input
            value={panchayatArea}
            onChange={(e) => setPanchayatArea(e.target.value)}
            type="text"
            placeholder="ABC"
            id="panchayatArea"
            name="panchayatArea"
          />
          <label htmlFor="scheme">Scheme id</label>

          <input
            value={scheme}
            onChange={(e) => setScheme(e.target.value)}
            type="text"
            placeholder="ABC"
            id="scheme"
            name="scheme"
          />
          <button type="submit">Submit</button>
        </form>
        <Link to="/login" className="link-btn">
          Already have an account? Login here.
        </Link>
      </div>
    </div>
  );
};
