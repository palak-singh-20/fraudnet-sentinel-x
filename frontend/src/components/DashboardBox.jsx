import { motion } from "framer-motion";
function DashboardBox() {
  return (
    <div className="dashboard-box">

      {/* Detection Accuracy */}
      <div className="circle-metric">

        <div className="circle">
          <span>98%</span>
        </div>

        <p>Detection Accuracy</p>

      </div>

      {/* Threats Blocked */}
      <motion.div
className="metric"
initial={{opacity:0,y:50}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
viewport={{once:true}}
whileHover={{
scale:1.05,
boxShadow:"0 0 30px rgba(255,46,151,.6)"
}}
>

        <h1>1000+</h1>

        <p>Threats Blocked</p>

        <span className="status safe">SAFE</span>

      </motion.div>

      {/* Monitoring */}
      <div className="metric">

        <h1>24/7</h1>

        <p>Monitoring</p>

        <span className="status active">ACTIVE</span>

      </div>

      {/* Threat Activity */}
      <div className="chart-box">

        <h3>Threat Activity</h3>

        <svg className="line-chart" viewBox="0 0 300 180">

          <polyline
            points="10,140 60,90 110,110 160,60 220,80 280,30"
          />

          <circle cx="10" cy="140" r="5"/>
          <circle cx="60" cy="90" r="5"/>
          <circle cx="110" cy="110" r="5"/>
          <circle cx="160" cy="60" r="5"/>
          <circle cx="220" cy="80" r="5"/>
          <circle cx="280" cy="30" r="5"/>

        </svg>

      </div>

      {/* Live Alerts */}
      <div className="feed-box">

        <h3>Live Alerts</h3>

        <div className="feed-item critical">
          🔴 Fake UPI QR blocked
        </div>

        <div className="feed-item warning">
          🟠 WhatsApp phishing detected
        </div>

        <div className="feed-item low">
          🟢 Suspicious SMS blocked
        </div>

      </div>

    </div>
  );
}

export default DashboardBox;