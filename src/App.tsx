import './App.css'

function App() {
  const urlDelObjeto360 =
    "https://sketchfab.com/models/oWRKLxNqOINsmjijBrOxTWgOgGY/embed";

  return (
    <div className="fullscreen-container">
      {/* Cuadro flotante con el título */}
      <div className="title-box">
        <h1> Mi Laboratorio 360</h1>
      </div>

      {/* Visor 3D */}
      <iframe
        title="Car"
        src={urlDelObjeto360}
        allow="autoplay; fullscreen; xr-spatial-tracking"
        allowFullScreen
        loading="lazy"
      />

    </div>
  );
}

export default App;
