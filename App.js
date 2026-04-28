import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [visible, setVisible] = useState(false);
  const [time, setTime] = useState(new Date());

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

        {/* Info cards */}
        <div className="cards">
          <div className="card">
            <div className="card-icon">⚡</div>
            <h3>CI/CD Pipeline</h3>
            <p>Despliegue automático al hacer Push a la rama main en GitHub.</p>
          </div>
          <div className="card">
            <div className="card-icon"></div>
            <h3>Azure App Service</h3>
            <p>Hospedada en la nube de Microsoft con alta disponibilidad.</p>
          </div>
          <div className="card">
            <div className="card-icon"></div>
            <h3>GitHub Actions</h3>
            <p>Workflow automatizado que compila y despliega la aplicación.</p>
          </div>
        </div>

        {/* Student info */}
        <div className="student-card">
          <div className="student-label">Información del Estudiante</div>
          <div className="student-grid">
            <div>
              <span className="field-label">Curso</span>
              <span className="field-value">Programación en la Nube</span>
            </div>
            <div>
              <span className="field-label">Tarea</span>
              <span className="field-value">No. 6 — CI/CD</span>
            </div>
            <div>
              <span className="field-label">Tecnología</span>
              <span className="field-value">React + Azure + GitHub Actions</span>
            </div>
            <div>
              <span className="field-label">Versión</span>
              <span className="field-value">1.0.0</span>
            </div>
          </div>
        </div>

        <footer className="footer">
          Tarea No. 6 · CI/CD · {new Date().getFullYear()}
        </footer>
      </main>
    </div>
  );
}

export default App;
