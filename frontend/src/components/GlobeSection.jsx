import Globe from "react-globe.gl";
import { useRef, useEffect, useState } from "react";

const cities = [
  { city: "New Delhi", lat: 28.6139, lng: 77.2090 },
  { city: "New York", lat: 40.7128, lng: -74.0060 },
  { city: "London", lat: 51.5072, lng: -0.1276 },
  { city: "Tokyo", lat: 35.6762, lng: 139.6503 },
  { city: "Sydney", lat: -33.8688, lng: 151.2093 },
  { city: "Singapore", lat: 1.3521, lng: 103.8198 },
  { city: "Dubai", lat: 25.2048, lng: 55.2708 },
  { city: "Berlin", lat: 52.5200, lng: 13.4050 },
  { city: "Toronto", lat: 43.6532, lng: -79.3832 },
  { city: "São Paulo", lat: -23.5505, lng: -46.6333 }
];

function GlobeSection() {
  const globeEl = useRef();
  const [attacks, setAttacks] = useState([
     {
    city: "New Delhi",
    lat: 28.6139,
    lng: 77.2090,
    size: 0.45,
    color: "#ff2e97"
  }
  ]);
const [arcs, setArcs] = useState([]);

  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.5;

      globeEl.current.pointOfView(
        {
          altitude: 2.2,
        },
        1000
      );
    }
  }, []);

  useEffect(() => {

  const interval = setInterval(() => {

    const from =
      cities[Math.floor(Math.random() * cities.length)];

    let to =
      cities[Math.floor(Math.random() * cities.length)];

    while (to.city === from.city) {
      to =
        cities[Math.floor(Math.random() * cities.length)];
    }

    const attack = {
      ...to,
      size: 0.45,
      color: "#ff2e97"
    };

    const arc = {
      startLat: from.lat,
      startLng: from.lng,
      endLat: to.lat,
      endLng: to.lng,
      color: ["#ff2e97", "#18ff83"]
    };

    setAttacks(prev => [...prev.slice(-15), attack]);
    setArcs(prev => [...prev.slice(-15), arc]);

  }, 2000);

  return () => clearInterval(interval);

}, []);

  

  

  return (
    <section className="globe-section">
      <h2>🌍 Global Cyber Attack Network</h2>

      <Globe
        ref={globeEl}
        width={1100}
        height={650}
        backgroundColor="rgba(0,0,0,0)"
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        showAtmosphere={true}
        atmosphereColor="#3fa9ff"
        atmosphereAltitude={0.25}

        /* Attack Points */
        pointsData={attacks}
        pointLat="lat"
        pointLng="lng"
        pointAltitude="size"
        pointColor="color"
        pointRadius={0.35}

        /* Attack Lines */
        arcsData={arcs}
        arcColor="color"
        arcStroke={0.8}
        arcDashLength={0.35}
        arcDashGap={2}
        arcDashAnimateTime={2500}

        /* Pulsing Rings */
        ringsData={attacks}
        ringLat="lat"
        ringLng="lng"
        ringColor="color"
        ringMaxRadius={4}
        ringPropagationSpeed={3}
        ringRepeatPeriod={700}

        /* Hover Labels */
        labelsData={attacks}
        labelLat="lat"
        labelLng="lng"
        labelText={(d) =>
          `📍 ${d.city}
⚠ Threat Level: High
🛡 Status: Active
🔥 Attack Rate: ${Math.floor(Math.random() * 200)}/min`
        }
        labelSize={1.2}
        labelColor={() => "#ff2e97"}
        labelDotRadius={0.35}
      />
    </section>
  );
}

export default GlobeSection;