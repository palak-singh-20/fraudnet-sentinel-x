function GlobalMap() {
  return (
    <div className="global-map">

      <h3>Global Threat Map</h3>

      <div className="map-container">

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
          alt="World Map"
          className="world-image"
        />

        {/* Pulses */}
        <div className="pulse pulse1"></div>
        <div className="pulse pulse2"></div>
        <div className="pulse pulse3"></div>
        <div className="pulse pulse4"></div>
        <div className="pulse pulse5"></div>

        {/* Attack Lines */}
        <svg
          className="attack-lines"
          viewBox="0 0 1000 600"
          preserveAspectRatio="none"
        >

          {/* Moving Packets */}
          <circle className="packet packet1" r="6" />
          <circle className="packet packet2" r="6" />
          <circle className="packet packet3" r="6" />

          <line x1="220" y1="150" x2="500" y2="250" />
          <line x1="500" y1="250" x2="760" y2="120" />
          <line x1="500" y1="250" x2="700" y2="430" />
          <line x1="700" y1="430" x2="350" y2="520" />

        </svg>

      </div>

    </div>
  );
}

export default GlobalMap;