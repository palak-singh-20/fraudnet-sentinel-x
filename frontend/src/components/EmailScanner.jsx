import { useState } from "react";

function EmailScanner() {

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  return (

    <section className="email-scanner">

      <h2>📧 AI Email Scanner</h2>

      <textarea
        placeholder="Paste the complete email here..."
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />

      <button>
        Analyze Email
      </button>

    </section>

  );

}

export default EmailScanner;