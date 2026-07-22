function CommandCenter() {
  return (
    <div className="command-center">

      <h3>AI Command Center</h3>

      <div className="command-grid">

        <div className="command-card">
          <h4>Gemini AI</h4>
          <span>Online</span>
        </div>

        <div className="command-card">
          <h4>OCR Scanner</h4>
          <span>Running</span>
        </div>

        <div className="command-card">
          <h4>Link Analyzer</h4>
          <span>Active</span>
        </div>

        <div className="command-card">
          <h4>SMS Shield</h4>
          <span>Protected</span>
        </div>

        <div className="command-card">
          <h4>Threat DB</h4>
          <span>Connected</span>
        </div>

        <div className="command-card">
          <h4>Response Engine</h4>
          <span>Ready</span>
        </div>

      </div>

    </div>
  );
}

export default CommandCenter;