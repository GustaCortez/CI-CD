import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [visible, setVisible] = useState(false);
  const [time, setTime] = useState(new Date());
  const [nombre, setNombre] = useState("Melvin Gustavo Cortez y Cortez");
  const [carnet, setCarnet] = useState("0907-17-3971");

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) =>
    date.toLocaleTimeString("es-GT", { hour: "2-digit", minute: "2-digit", second: "2-digit" });

  const formatDate = (date) =>
    date.toLocaleDateString("es-GT", { weekday: "long", year: "numeric", month: "long", day: "numeric" });

  return (
    <div className={`app ${visible ? "visible" : ""}`}>
      {/* Background grid */}
      <div className="grid-bg" />
      <div className="glow glow-1" />
      <div className="glow glow-2" />

      <main className="container">
        {/* Badge */}
        <div className="badge">
          <span className="dot" />
          Desplegado en Azure · CI/CD Activo
        </div>

        {/* Hero */}
        <h1 className="title">
          <span className="title-line">Bienvenido a</span>
          <span className="title-accent">Mi Aplicación</span>
        </h1>

        <p className="subtitle">
          Desarrollada con <strong>React</strong> · Desplegada automáticamente en{" "}
          <strong>Azure App Service</strong> vía <strong>GitHub Actions</strong>
        </p>

        {/* Live clock */}
        <div className="clock-card">
          <div className="clock-time">{formatTime(time)}</div>
          <div className="clock-date">{formatDate(time)}</div>
        </div>

        {/* Features */}
        <div className="cards">
          <div className="card">
            <div className="card-icon"></div>
            <h3>CI/CD Automatizado</h3>
            <p>Despliegue automático en cada push a main</p>
          </div>
          <div className="card">
            <div className="card-icon"></div>
            <h3>Azure App Service</h3>
            <p>Infraestructura escalable en la nube</p>
          </div>
          <div className="card">
            <div className="card-icon"></div>
            <h3>Performance</h3>
            <p>Optimizado para máxima velocidad</p>
          </div>
        </div>

        {/* Student info */}
        <div className="student-card">
          <div className="student-label"> Información del Estudiante</div>
          <div className="student-grid">
            <div>
              <div className="field-label">Nombre</div>
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="field-input"
                placeholder="Ingresa tu nombre"
              />
            </div>
            <div>
              <div className="field-label">Carnet</div>
              <input
                type="text"
                value={carnet}
                onChange={(e) => setCarnet(e.target.value)}
                className="field-input"
                placeholder="Ingresa tu carnet"
              />
            </div>
            <div>
              <div className="field-label">Tarea</div>
              <input
                type="text"
                value="CI/CD - Tarea 6"
                className="field-input"
                readOnly
              />
            </div>
            <div>
              <div className="field-label">Fecha</div>
              <div className="field-value">{formatDate(new Date())}</div>
            </div>
          </div>
          <div className="footer">Despliegue automático en Azure vía GitHub Actions</div>
        </div>
      </main>
    </div>
  );
}

export default App;
