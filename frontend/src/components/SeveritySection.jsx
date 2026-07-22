function SeveritySection() {
  return (
    <div className="severity-section">

      <h3>Threat Severity Distribution</h3>

      <div className="severity-card">

        <div className="severity-row">
          <span>Critical</span>

          <div className="progress">
            <div className="critical-bar"></div>
          </div>

          <span>82%</span>
        </div>

        <div className="severity-row">
          <span>High</span>

          <div className="progress">
            <div className="high-bar"></div>
          </div>

          <span>65%</span>
        </div>

        <div className="severity-row">
          <span>Medium</span>

          <div className="progress">
            <div className="medium-bar"></div>
          </div>

          <span>38%</span>
        </div>

        <div className="severity-row">
          <span>Low</span>

          <div className="progress">
            <div className="low-bar"></div>
          </div>

          <span>14%</span>
        </div>

      </div>

    </div>
  );
}

export default SeveritySection;