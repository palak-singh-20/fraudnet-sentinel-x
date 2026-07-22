import jsQR from "jsqr";
import { useState } from "react";

function QRScanner() {

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  async function scanQR() {

  if (!image) {
    alert("Please upload a QR code image.");
    return;
  }

  setLoading(true);

  const img = new Image();

  img.src = URL.createObjectURL(image);

  img.onload = async () => {

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = img.width;
    canvas.height = img.height;

    ctx.drawImage(img, 0, 0);

    const imageData = ctx.getImageData(
      0,
      0,
      canvas.width,
      canvas.height
    );

    const code = jsQR(
      imageData.data,
      imageData.width,
      imageData.height
    );

    if (!code) {

      alert("QR Code not found.");

      setLoading(false);

      return;

    }

    console.log("Decoded URL:", code.data);

    try {

      const response = await fetch(
        "https://palak-singh.app.n8n.cloud/webhook/scan-url",
        {
          method: "POST",
          headers: {
            "Content-Type":"application/json"
          },
          body: JSON.stringify({
            url: code.data
          })
        }
      );

      const data = await response.json();

      setResult(data.output);

    } catch(err){

      console.error(err);

    }

    setLoading(false);

  };

}
  return (

    <section className="qr-scanner">

      <h2>📷 AI QR Scanner</h2>

      <input
        type="file"
        accept="image/*"
        onChange={(e)=>setImage(e.target.files[0])}
      />

      <button onClick={scanQR}>
  {loading ? "Scanning..." : "Scan QR"}
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

export default QRScanner;