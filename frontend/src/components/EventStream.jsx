import { useEffect, useState } from "react";

function EventStream() {

  const [events, setEvents] = useState([
    "🛡 System initialized",
    "🤖 Gemini AI online",
    "🌍 Global monitoring started"
  ]);

  const cyberEvents = [
    "🚨 Phishing attack blocked",
    "⚠ QR Scam detected",
    "🛡 Fake UPI website blocked",
    "📩 SMS scam intercepted",
    "🌐 Malicious URL quarantined",
    "📧 Email phishing detected",
    "🔐 Suspicious login prevented",
    "🤖 AI confidence updated",
    "🌍 New global threat detected",
    "⚡ Firewall rules updated"
  ];

  useEffect(() => {

    const interval = setInterval(() => {

      const randomEvent =
        cyberEvents[Math.floor(Math.random() * cyberEvents.length)];

      setEvents(prev => [
        randomEvent,
        ...prev.slice(0, 7)
      ]);

    }, 3000);

    return () => clearInterval(interval);

  }, []);

  return (

    <section className="event-stream">

      <h2>Live Event Stream</h2>

      <div className="event-list">

        {events.map((event, index) => (

          <div
            key={index}
            className="event-card"
          >
            {event}
          </div>

        ))}

      </div>

    </section>

  );

}

export default EventStream;