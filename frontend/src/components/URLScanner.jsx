import { useState } from "react";

function URLScanner() {

  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  async function scanURL() {

  if (url.trim() === "") {
    alert("Please enter a URL.");
    return;
  }

  setLoading(true);

  try {

    const response = await fetch(
      "https://palak-singh.app.n8n.cloud/webhook/scan-url",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          url: url
        })
      }
    );

    const data = await response.json();

    console.log(data);

    setResult(data.output);

  } catch (err) {

    console.error(err);

    alert("Unable to scan URL.");

  }

  setLoading(false);

}
  return (
    <section className="url-scanner">

      <h2>🔗 AI URL Scanner</h2>

      <input
        type="text"
        placeholder="Paste a URL..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <button onClick={scanURL}>
    {loading ? "Scanning..." : "Scan URL"}
</button>
   {result && (

<div className="url-result">

<h3>Risk Score: {result.score}%</h3>

<h2>{result.threat}</h2>

<p><strong>Type:</strong> {result.type}</p>

<p><strong>Domain:</strong> {result.domain}</p>

<p>{result.explanation}</p>

<p><strong>Recommendation:</strong> {result.recommendation}</p>

</div>

)}
    </section>
  );
}

export default URLScanner;