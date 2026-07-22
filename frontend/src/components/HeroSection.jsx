import HeroButtons from "./HeroButtons";


function HeroSection() {
  return (
    <div className="hero">

      <h1>🛡️ FraudNet Sentinel X</h1>

      <h2 className="hero-subtitle">
       AI Protection Against Digital Fraud
      </h2>

      <p className="hero-text">
      Protect your money and identity with AI-powered scam detection and recovery.
      </p>

      <HeroButtons />

    </div>
  );
}

export default HeroSection;