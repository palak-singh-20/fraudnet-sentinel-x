import { motion } from "framer-motion";

function TopologySection() {
  return (
    <motion.div
      className="topology-section"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h3>Network Topology</h3>

      <div className="topology-container">

        <div className="node center-node">
          AI Engine
        </div>

        <div className="node node1">
          URL Scanner
        </div>

        <div className="node node2">
          SMS Filter
        </div>

        <div className="node node3">
          OCR Engine
        </div>

        <div className="node node4">
          Rescue Hub
        </div>

        <svg className="topology-lines">
          <line x1="50%" y1="50%" x2="20%" y2="20%" />
          <line x1="50%" y1="50%" x2="80%" y2="20%" />
          <line x1="50%" y1="50%" x2="20%" y2="80%" />
          <line x1="50%" y1="50%" x2="80%" y2="80%" />
        </svg>

      </div>
    </motion.div>
  );
}

export default TopologySection;