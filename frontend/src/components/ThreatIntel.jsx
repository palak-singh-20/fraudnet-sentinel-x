import { useEffect, useState } from "react";

const threats = [
  {
    level: "HIGH",
    confidence: "98.4%",
    recommendation:
      "Enable enhanced URL filtering and monitor suspicious QR payments."
  },
  {
    level: "MEDIUM",
    confidence: "91.7%",
    recommendation:
      "Increase SMS spam sensitivity and notify users."
  },
  {
    level: "LOW",
    confidence: "88.1%",
    recommendation:
      "Continue monitoring global traffic."
  },
  {
    level: "CRITICAL",
    confidence: "99.8%",
    recommendation:
      "Immediate response required. Multiple phishing campaigns detected."
  }
];

function ThreatIntel() {

  const [intel, setIntel] = useState(threats[0]);

  const [time, setTime] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {

    const interval = setInterval(() => {

      setIntel(
        threats[
          Math.floor(Math.random() * threats.length)
        ]
      );

      setTime(new Date().toLocaleTimeString());

    }, 5000);

    return () => clearInterval(interval);

  }, []);

  return (

    <section className="threat-intel">

      <h2>🧠 AI Threat Intelligence</h2>

      <div className="intel-card">

        <h3>
          Threat Level
        </h3>

        <h1>{intel.level}</h1>

        <h4>
          Confidence: {intel.confidence}
        </h4>

        <p>{intel.recommendation}</p>

        <span>
          Last Updated: {time}
        </span>

      </div>

    </section>

  );

}

export default ThreatIntel;