import { useEffect, useState } from "react";

function AttackCounter() {

  const [urls, setUrls] = useState(1248);
  const [sms, setSms] = useState(823);
  const [qr, setQr] = useState(532);

  useEffect(() => {

    const interval = setInterval(() => {

      setUrls(prev => prev + Math.floor(Math.random() * 3));

      setSms(prev => prev + Math.floor(Math.random() * 2));

      setQr(prev => prev + Math.floor(Math.random() * 2));

    }, 2000);

    return () => clearInterval(interval);

  }, []);

  return (

    <section className="attack-counter">

      <h2>Live Threat Counter</h2>

      <div className="counter-grid">

        <div className="counter-card">
          <h1>{urls.toLocaleString()}+</h1>
          <p>URLs Blocked</p>
        </div>

        <div className="counter-card">
          <h1>{sms.toLocaleString()}+</h1>
          <p>SMS Scams Prevented</p>
        </div>

        <div className="counter-card">
          <h1>{urls.toLocaleString()}+</h1>
          <p>QR Frauds Stopped</p>
        </div>

        <div className="counter-card">
          <h1>99.8%</h1>
          <p>System Uptime</p>
        </div>

      </div>

    </section>

  );
}

export default AttackCounter;