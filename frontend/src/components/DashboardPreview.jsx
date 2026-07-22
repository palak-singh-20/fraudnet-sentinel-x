import { motion } from "framer-motion";
import HeatmapSection from "./HeatmapSection";
import DashboardBox from "./DashboardBox";
import SystemStatus from "./SystemStatus";
import RecentThreats from "./RecentThreats";
import AIEngine from "./AIEngine";
import SeveritySection from "./SeveritySection";
import GlobalMap from "./GlobalMap";
import ConfidenceCenter from "./ConfidenceCenter";
import TerminalSection from "./TerminalSection";
import AttackCounter from "./AttackCounter";
import CommandCenter from "./CommandCenter";
import WeeklyStats from "./WeeklyStats";
import TopologySection from "./TopologySection";
import EventStream from "./EventStream";
import RecommendationSection from "./RecommendationSection";
import AlertCenter from "./AlertCenter";
import LogsSection from "./LogsSection";
import Footer from "./Footer";
import ThreatIntel from "./ThreatIntel";
import AttackChart from "./AttackChart";
import URLScanner from "../components/URLScanner";
import GlobeSection from "./GlobeSection";
import AIAnalyzer from "./AIAnalyzer";
import QRScanner from "../components/QRScanner";
import EmailScanner from "../components/EmailScanner";
function DashboardPreview() {
  return (
    <motion.section
      className="dashboard-preview"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>Live Analytics Dashboard</h2>

      <p className="dashboard-text">
        Real-time protection against phishing, scams, and suspicious activities.
      </p>

      <div className="live-status">
        ● LIVE MONITORING
      </div>

      <DashboardBox />

      <SystemStatus />

      <RecentThreats />

      <AIEngine />

      <SeveritySection />

      <GlobeSection />

      <HeatmapSection />

      <ConfidenceCenter />

      <TerminalSection />

      <AttackCounter />

      <CommandCenter />

      <WeeklyStats />

      <TopologySection />

      <EventStream />

      <RecommendationSection />

      <AlertCenter />

      <LogsSection />
      <ThreatIntel />
      <AttackChart />
      <AIAnalyzer />
      <URLScanner />
      <QRScanner />
      <EmailScanner />
      <Footer />

      {/* Floating dots */}
      <div className="bg-dot dot1"></div>
      <div className="bg-dot dot2"></div>
      <div className="bg-dot dot3"></div>
      <div className="bg-dot dot4"></div>
      <div className="bg-dot dot5"></div>
    </motion.section>
  );
}

export default DashboardPreview;