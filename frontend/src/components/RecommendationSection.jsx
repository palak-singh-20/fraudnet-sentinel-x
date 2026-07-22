import { motion } from "framer-motion";
function RecommendationSection() {
  return (
    <motion.div
className="recommendation-section"
initial={{ opacity: 0, x: 100 }}
whileInView={{ opacity: 1, x: 0 }}
transition={{ duration: 0.8 }}
viewport={{ once: true }}
>

      <h3>AI Recommendation Engine</h3>

      <div className="recommendation-grid">

        <div className="recommendation-card">

          <div className="recommendation-icon">
            🔗
          </div>

          <h4>Enable URL Protection</h4>

          <p>
            High phishing activity detected.
            Increase URL scan sensitivity.
          </p>

        </div>

        <div className="recommendation-card">

          <div className="recommendation-icon">
            📱
          </div>

          <h4>SMS Shield Update</h4>

          <p>
            SMS spam volume increased by 12%.
            Apply enhanced filters.
          </p>

        </div>

        <div className="recommendation-card">

          <div className="recommendation-icon">
            🛡
          </div>

          <h4>Threat Database Sync</h4>

          <p>
            New malware signatures available.
            Synchronization recommended.
          </p>

        </div>

      </div>

    </motion.div>
  );
}

export default RecommendationSection;