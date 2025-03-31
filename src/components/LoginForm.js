import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";

// Sample user data - in a real app, this would come from a backend
const VALID_USERS = [
  {
    username: "user1",
    password: "password123",
    name: "John Doe",
    email: "john@example.com",
    image: null
  },
  {
    username: "user2",
    password: "password456",
    name: "Jane Smith",
    email: "jane@example.com",
    image: null
  }
];

function LoginForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    setError(""); // Clear error when user types
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Find user with matching credentials
    const user = VALID_USERS.find(
      u => u.username === formData.username && u.password === formData.password
    );

    if (user) {
      localStorage.setItem('currentUser', JSON.stringify({
        name: user.name,
        email: user.email,
        image: user.image
      }));
      
      navigate('/dashboard');
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <main>
        <form 
          className="login-form" 
          onSubmit={handleSubmit}
          aria-labelledby="login-title"
        >
          <div className="login-icon" role="presentation">
            <i className="fas fa-user-circle" aria-hidden="true"></i>
          </div>
          
          <div className="form-inner">
            <h1 id="login-title" className="form-title">
              Sign In to Your Account
            </h1>
            
            {error && (
              <div 
                className="error-message" 
                role="alert"
                aria-live="polite"
              >
                {error}
              </div>
            )}
            
            <div className="form-group">
              <label htmlFor="username" className="form-label">
                Username <span className="sr-only">(required)</span>
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                aria-required="true"
                aria-invalid={error ? "true" : "false"}
                aria-describedby={error ? "login-error" : undefined}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password <span className="sr-only">(required)</span>
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                aria-required="true"
                aria-invalid={error ? "true" : "false"}
                aria-describedby={error ? "login-error" : undefined}
              />
            </div>

            <button 
              type="submit" 
              className="submit-button"
              disabled={!formData.username || !formData.password}
              aria-disabled={!formData.username || !formData.password}
            >
              Sign In
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default LoginForm;
