import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import LoginForm from "./LoginForm";
export default function Form() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.username || !user.password) {
      setError("Please fill in all fields");
      return;
    }
    // Add form submission logic here
    navigate('/dashboard');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) {
      setError("");
    }
  };

  //the js so that the add items form can communicate with frontend and the backend, and that the buttons can work should be here
  return (
    <div className="form-container">
      <div>
        <header>
          <title>Site Title</title>
          <h2>African Market </h2>
          <div className="navbar">
            <nav>
              <button>
                <a href="/women">Women</a>
              </button>
              <button>
                <a href="/men">Men</a>
              </button>
              <button>
                <a href="/dashboard">Dashboard</a>
              </button>
            </nav>
          </div>
        </header>
      </div>

      {user.email !== "" ? (
        <div className="welcome">
          <h2>
            Welcome, <span>{user.name}</span>
          </h2>
          <button>Logout</button>
        </div>
      ) : (
        <LoginForm LoginForm={LoginForm} error={error} />
      )}

      <form onSubmit={handleSubmit}>
        {error && <div className="error-message">{error}</div>}
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleChange}
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
