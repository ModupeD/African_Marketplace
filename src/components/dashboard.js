import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './dashboard.css';

function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Get user data from localStorage
    const userData = localStorage.getItem('currentUser');
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      // Redirect to login if no user data found
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  if (!user) {
    return (
      <div className="dashboard-container">
        <div role="alert" aria-live="polite">Loading your profile...</div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <main>
        <div className="dashboard-card" role="region" aria-label="User Profile">
          <div className="user-profile">
            {user.image ? (
              <img 
                src={user.image} 
                alt={user.name}
                className="user-image"
              />
            ) : (
              <i 
                className="fas fa-user-circle user-icon" 
                role="img" 
                aria-label="Default profile icon"
              ></i>
            )}
            
            <h1>Welcome, {user.name}!</h1>
            
            <div className="user-info" role="list">
              <div className="info-item" role="listitem">
                <i className="fas fa-envelope" aria-hidden="true"></i>
                <span className="info-label">Email:</span>
                <span>{user.email}</span>
              </div>
            </div>

            <button 
              className="logout-button"
              onClick={handleLogout}
              aria-label="Sign out of your account"
            >
              Sign Out
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
