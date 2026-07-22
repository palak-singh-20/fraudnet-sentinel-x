import { useEffect, useState } from "react";

function LogsSection() {

  const [logs, setLogs] = useState([
    {
      time: "12:41:08",
      type: "Phishing URL",
      status: "Blocked",
      source: "WhatsApp"
    },
    {
      time: "12:40:32",
      type: "SMS Scam",
      status: "Neutralized",
      source: "SMS Filter"
    },
    {
      time: "12:39:58",
      type: "APK Malware",
      status: "Critical",
      source: "Gemini AI"
    }
  ]);

  const threats = [
    "Phishing URL",
    "QR Scam",
    "Fake UPI",
    "APK Malware",
    "WhatsApp Scam",
    "Telegram Scam",
    "Email Phishing",
    "Banking Fraud"
  ];

  const sources = [
    "WhatsApp",
    "Gemini AI",
    "OCR Engine",
    "SMS Filter",
    "URL Scanner"
  ];

  const status = [
    "Blocked",
    "Neutralized",
    "Critical"
  ];

  useEffect(() => {

    const interval = setInterval(() => {

      const now = new Date();

      const newLog = {
        time: now.toLocaleTimeString(),

        type:
          threats[Math.floor(Math.random() * threats.length)],

        status:
          status[Math.floor(Math.random() * status.length)],

        source:
          sources[Math.floor(Math.random() * sources.length)]
      };

      setLogs(prev => [newLog, ...prev.slice(0,7)]);

    }, 3000);

    return () => clearInterval(interval);

  }, []);

  return (

    <section className="logs-section">

      <h2>Security Logs</h2>

      <table>

        <thead>

          <tr>

            <th>Time</th>
            <th>Type</th>
            <th>Status</th>
            <th>Source</th>

          </tr>

        </thead>

        <tbody>

          {logs.map((log,index)=>(

            <tr key={index}>

              <td>{log.time}</td>

              <td>{log.type}</td>

              <td className={log.status.toLowerCase()}>
                {log.status}
              </td>

              <td>{log.source}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </section>

  );

}

export default LogsSection;