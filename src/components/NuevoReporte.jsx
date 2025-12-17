/* NuevoReporte.jsx*/
import { useState } from "react";
import "./NuevoReporte.css";

export default function NuevoReporte() {
  // Estado del formulario
  const [asunto, setAsunto] = useState("");
  const [priority, setPriority] = useState("2"); // Normal
  const [tracker, setTracker] = useState("3");   // Soporte
  const [descripcion, setDescripcion] = useState("");

  // Limpiar formulario
  const limpiarFormulario = () => {
  setAsunto("");
  setPriority("2");
  setTracker("3");
  setDescripcion("");
  };


const crearReporte = async () => {
  // Validaciones básicas
  if (asunto.length < 4 || descripcion.length < 10) {
    alert("Por favor completa los campos correctamente.");
    return;
  }

  // Construimos el payload
  const payload = {
    subject: asunto,
    description: descripcion,
    tracker_id: Number(tracker),
    priority_id: Number(priority),
  };

  try {
    const res = await fetch("http://localhost:4000/tickets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      const err = await res.json();
      console.error("Error al crear ticket:", err);
      alert("Ocurrió un error al crear el ticket.");
      return;
    }

    const data = await res.json();
    console.log("Ticket creado:", data);
    alert("Ticket creado correctamente en Redmine!");

    // Limpiar formulario
    limpiarFormulario();
    } catch (error) {
      console.error("Error al conectar con backend:", error);
      alert("No se pudo conectar con el backend.");
    }
  };


  return (
    <div className="nr-container">
      <div className="nr-card">
        <div className="nr-header">
          <div>
            <h2>Crear reporte</h2>
            
          </div>
        </div>

        
        <div className="nr-field">
          <label>Asunto</label>
          <input
            type="text"
            value={asunto}
            onChange={(e) => setAsunto(e.target.value)}
            placeholder="Escribe aquí el asunto del reporte"
          />
          <small>Debe contener un mínimo de 3 caracteres.</small>
        </div>

       
        <div className="nr-grid">
          <div className="nr-field">
            <label>Prioridad</label>
            <select value={priority} onChange={e => setPriority(e.target.value)}>
              <option value="5">Inmediata</option>
              <option value="4">Urgente</option>
              <option value="3">Alta</option>
              <option value="2">Normal</option>
              <option value="1">Baja</option>
            </select>
          </div>

          <div className="nr-field">
            <label>Tipo</label>
            <select value={tracker} onChange={e => setTracker(e.target.value)}>
              <option value="1">Errores</option>
              <option value="2">Tareas</option>
              <option value="3">Soporte</option>
            </select>
          </div>
        </div>

        {/* Descripción */}
        <div className="nr-field">
          <label>Descripción</label>
          <textarea
            rows="5"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            placeholder="Describe el problema y prueba desde la app"
            style={{ fontFamily: "Poppins" }}
          />
          <small>Debe contener un mínimo de 10 caracteres.</small>
        </div>

        {/* Acciones */}
        <div className="nr-actions">
          <button
            className="nr-btn nr-btn-outline"
            onClick={limpiarFormulario}
          >
            Limpiar Form
          </button>

          <button
            className="nr-btn nr-btn-primary"
            onClick={crearReporte}
          >
            Crear
          </button>
        </div>
      </div>
    </div>
  );
}
