function RecentThreats() {
  return (
    <div className="recent-threats">

      <h3>Recent Threats</h3>

      <div className="threat-row">
        <span className="time">09:57</span>
        <span className="threat-text">Fake UPI QR blocked</span>
        <span className="threat-dot"></span>
      </div>

      <div className="threat-row">
        <span className="time">09:53</span>
        <span className="threat-text">WhatsApp phishing detected</span>
        <span className="threat-dot"></span>
      </div>

      <div className="threat-row">
        <span className="time">09:49</span>
        <span className="threat-text">SMS scam blocked</span>
        <span className="threat-dot"></span>
      </div>

      <div className="threat-row">
        <span className="time">09:45</span>
        <span className="threat-text">APK malware prevented</span>
        <span className="threat-dot"></span>
      </div>

    </div>
  );
}

export default RecentThreats;