import { motion } from "framer-motion";

function HeatmapSection() {
  return (
    <motion.div
      className="heatmap-section"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h3>Weekly Threat Heatmap</h3>

      <div className="heatmap-grid">
        <div className="cell heat-critical"></div>
        <div className="cell medium"></div>
        <div className="cell low"></div>
        <div className="cell heat-critical"></div>
        <div className="cell medium"></div>
        <div className="cell low"></div>
        <div className="cell heat-critical"></div>

        <div className="cell low"></div>
        <div className="cell medium"></div>
        <div className="cell heat-critical"></div>
        <div className="cell medium"></div>
        <div className="cell low"></div>
        <div className="cell heat-critical"></div>
        <div className="cell low"></div>
      </div>
    </motion.div>
  );
}

export default HeatmapSection;