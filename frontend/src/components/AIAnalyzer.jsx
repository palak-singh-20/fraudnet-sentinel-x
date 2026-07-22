import { useState } from "react";

function AIAnalyzer() {

  const [text, setText] = useState("");

  const [result, setResult] = useState(null);

const [loading, setLoading] = useState(false);
  async function analyze() {
  if (text.trim().length < 5) {
    alert("Please enter a suspicious message.");
    return;
  }

  setLoading(true);

  try {
    const response = await fetch(
      "https://palak-singh.app.n8n.cloud/webhook/analyze-scam",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: text,
        }),
      }
    );

    const data = await response.json();

    console.log(data);

    setResult(data.output);

  } catch (err) {
    console.error(err);

    alert("Failed to connect to AI server.");
  }

  setLoading(false);
}

  return(

    <section className="ai-analyzer">

      <h2>🤖 AI Scam Analyzer</h2>

      <textarea

        placeholder="Paste URL, SMS, Email or QR text..."

        value={text}

        onChange={(e)=>setText(e.target.value)}

      />

      <button onClick={analyze}>

        Analyze with AI

      </button>

      {result && (

        <div className="analysis-card">

          <h3>

            Risk Score: {result.score}%

          </h3>

          <h4>

            {result.threat}

          </h4>

          <p>

            {result.explanation}

          </p>

        </div>

      )}

    </section>

  );

}

export default AIAnalyzer;