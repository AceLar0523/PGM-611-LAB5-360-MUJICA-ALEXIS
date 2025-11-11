import './App.css'

function App() {
  const urlDelObjeto360 =
    "https://sketchfab.com/models/oWRKLxNqOINsmjijBrOxTWgOgGY/embed";

  return (
    <div className="fullscreen-container">
      {/* Cuadro flotante con el título */}
      <div className="title-box">
        <h1>🧪 Mi Laboratorio 360</h1>
      </div>

      {/* Visor 3D */}
      <iframe
        title="Car"
        src={urlDelObjeto360}
        allow="autoplay; fullscreen; xr-spatial-tracking"
        allowFullScreen
        loading="lazy"
      />

      {/* Créditos Sketchfab */}
      <div className="credits-overlay">
        <p>
          <a
            href="https://sketchfab.com/3d-models/car-oWRKLxNqOINsmjijBrOxTWgOgGY"
            target="_blank"
            rel="noopener noreferrer"
          >
            Car
          </a>{" "}
          by{" "}
          <a
            href="https://sketchfab.com/hra"
            target="_blank"
            rel="noopener noreferrer"
          >
            hra
          </a>{" "}
          on{" "}
          <a
            href="https://sketchfab.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sketchfab
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
