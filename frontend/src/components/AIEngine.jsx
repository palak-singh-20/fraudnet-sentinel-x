import { motion } from "framer-motion";

function AIEngine() {
  return (
    <div className="ai-engine">

      <h3>AI Engine Status</h3>

      <div className="engine-grid">

        <motion.div
          className="engine-card"
          whileHover={{
            scale: 1.08,
            boxShadow: "0 0 25px rgba(255,46,151,.7)"
          }}
          transition={{ duration: 0.3 }}
        >
          🟢 Gemini AI
          <span>Online</span>
        </motion.div>

        <motion.div
          className="engine-card"
          whileHover={{
            scale: 1.08,
            boxShadow: "0 0 25px rgba(255,46,151,.7)"
          }}
          transition={{ duration: 0.3 }}
        >
          🟢 OCR Scanner
          <span>Running</span>
        </motion.div>

        <motion.div
          className="engine-card active-engine"
          whileHover={{
            scale: 1.08,
            boxShadow: "0 0 25px rgba(255,46,151,.7)"
          }}
          transition={{ duration: 0.3 }}
        >
          🟢 Link Analyzer
          <span>Active</span>
        </motion.div>

        <motion.div
          className="engine-card"
          whileHover={{
            scale: 1.08,
            boxShadow: "0 0 25px rgba(255,46,151,.7)"
          }}
          transition={{ duration: 0.3 }}
        >
          🟢 SMS Filter
          <span>Protected</span>
        </motion.div>

      </div>

    </div>
  );
}

export default AIEngine;