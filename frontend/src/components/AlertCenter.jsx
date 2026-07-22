function AlertCenter() {
  return (
    <div className="alert-center">

      <h3>Emergency Alert Center</h3>

      <div className="alert-card">

        <div className="alert-icon">
          ⚠
        </div>

        <div className="alert-info">

          <h4>Critical Threat Detected</h4>

          <p>
            Multiple phishing domains detected from high-risk regions.
            Enhanced protection mode is enabled automatically.
          </p>

        </div>

        <button className="alert-btn">
          View Details
        </button>

      </div>

    </div>
  );
}

export default AlertCenter;