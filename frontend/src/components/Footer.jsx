import { motion } from "framer-motion";
function Footer() {
  return (
    <motion.footer
className="footer"
initial={{ opacity: 0 }}
whileInView={{ opacity: 1 }}
transition={{ duration: 1 }}
viewport={{ once: true }}
>

      <div className="footer-grid">

        <div className="footer-brand">

          <h2>🛡 FraudNet Sentinel X</h2>

          <p>
            Enterprise-grade AI powered cyber defense platform
            protecting users against phishing, scams and malicious
            activities in real time.
          </p>

        </div>

        <div className="footer-links">

          <h3>Quick Links</h3>

          <a href="#">Home</a>
          <a href="#">Analyzer</a>
          <a href="#">Citizen Shield</a>
          <a href="#">Dashboard</a>

        </div>

        <div className="footer-links">

          <h3>Services</h3>

          <a href="#">URL Scanner</a>
          <a href="#">SMS Protection</a>
          <a href="#">Threat Detection</a>
          <a href="#">AI Monitoring</a>

        </div>

        <div className="footer-links">

          <h3>Connect</h3>

          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
          <a href="#">Email</a>

        </div>

      </div>

      <div className="footer-bottom">
        © 2026 FraudNet Sentinel X • All Rights Reserved
      </div>

    </motion.footer>
  );
}

export default Footer;