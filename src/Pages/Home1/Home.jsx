import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Home.css';

function Home() {
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <div className="home">
      <header className="home-header">
        <div className="logo">
          <h1>Giglink</h1>
        </div>
        <nav className="home-nav">
          <button className="nav-btn" onClick={() => navigate('/signup')}>Sign Up</button>
          <button className="nav-btn" onClick={() => navigate('/login')}>Login</button> {/* Ensure Login navigation is present */}
          <button className="nav-btn">Join The Crew</button>
        </nav>
      </header>
      <div className="home-content">
        <h2 className="home-motto">Unlock Opportunities, Grow Together</h2>
        <p className="home-description">
          Welcome to Giglink! Our platform connects skilled professionals with exciting job opportunities, 
          fostering collaboration and growth. Join us to unlock your true potential.
        </p>
        <div className="cta-buttons">
          <button className="cta-btn">Post Your Task for Free</button>
          <button className="cta-btn">Earn Money as a Tasker</button>
        </div>
      </div>
      <footer className="home-footer">
        <div className="stats">
          <div className="stat-item">
            <span className="stat-icon">👥</span>
            <p>10k+ Customers</p>
          </div>
          <div className="stat-item">
            <span className="stat-icon">✅</span>
            <p>15k+ Tasks Done</p>
          </div>
          <div className="stat-item">
            <span className="stat-icon">⭐</span>
            <p>20k+ User Reviews</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
