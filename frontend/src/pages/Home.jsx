import Stats from "../components/Stats";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import RiskCard from "../components/RiskCard";
import Features from "../components/Features";
import DashboardPreview from "../components/DashboardPreview";

function Home() {
  return (
    <div>

      <Navbar />

      <HeroSection />

      <div className="cards-container">

        <RiskCard
          icon="🔍"
          title="Scam Detector"
          description="Analyze messages and identify fraud."
        />

        <RiskCard
          icon="🛡️"
          title="Citizen Shield"
          description="AI assistant for scam prevention."
        />

        <RiskCard
          icon="🚨"
          title="Victim Rescue"
          description="Generate complaint drafts and recovery plans."
        />

        <RiskCard
          icon="📊"
          title="Dashboard"
          description="Visualize fraud trends and analytics."
        />

      </div>
      <Stats />
      <Features />
      <DashboardPreview />
      
    </div>
  );
}

export default Home;