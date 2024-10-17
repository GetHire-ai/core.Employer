import React from "react";
import "./styles.css";

const PaymentModal = ({ open, handleClose, jobCreate }) => {
  return (
    <div className="popup-box fixed">
      <div className="flex justify-between items-stretch">
        {/* Left Side: Features Section */}
        <div className="left-section">
          <h2 className="section-title">AI-based Onboarding Features</h2>
          <p className="next-heading">
            Streamline your onboarding process with <b>AI-powered</b> automation
          </p>
          <div className="features-container">
            <ul className="feature-list">
              <li>
                Remove traditional documentation with our AI Documentation
                Manager.
              </li>
              <li>Send offer letters instantly with AI assistance.</li>
              <li>Automated profile matching with skill assessments.</li>
              <li>Track candidate progress in real-time.</li>
              <li>Seamless integration with your existing HR systems.</li>
            </ul>
          </div>
        </div>

        {/* Right Side: Action Buttons */}
        <div className="right-section">
          <h2 className="section-title">Select Your Next Action</h2>
          <div className="row">
            <p className="row1">
              Pick up right where you left off and finalize your job posting
              effortlessly.
            </p>
            <button className="primary-button">Continue Job Posting</button>
          </div>
          <div className="additional-actions">
            {/* Card-like Action Links with Icons */}
            <a href="#" className="action-card">
              <i className="fas fa-paper-plane"></i>
              <span>Send Offer Letter in Seconds</span>
            </a>
            <p className="row2">
              Instantly generate and send customized offer letters with just a
              few clicks.
            </p>
            <a href="#" className="action-card">
              <i className="fas fa-leaf"></i>
              <span>Go Paperless</span>
            </a>
            <p className="row2">
              Say goodbye to traditional paperwork—use our AI Onboarding and
              Documentation Manager.
            </p>
            <a href="#" className="action-card">
              <i className="fas fa-tasks"></i>
              <span>Explore Onboarding Process</span>
            </a>
            <p className="row2">
              Discover how our AI streamlines every step of onboarding, from
              documentation to integration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
