import { useState } from "react";
import "./NuevoReporte.css";

export default function NuevoReporte() {
  // Estado del formulario
  const [asunto, setAsunto] = useState("");
  const [prioridad, setPrioridad] = useState("media");
  const [estado, setEstado] = useState("abierto");
  const [descripcion, setDescripcion] = useState("");

  // Limpiar formulario
  const limpiarFormulario = () => {
    setAsunto("");
    setPrioridad("media");
    setEstado("abierto");
    setDescripcion("");
  };

  // Crear reporte
  const crearReporte = () => {

    // Aquí luego puedes usar fetch para enviarlo al backend

    limpiarFormulario();
  };

  return (
    <div className="nr-container">
      <div className="nr-card">
        <div className="nr-header">
          <div>
            <h2>Nuevo reporte</h2>
            <p>
              Escribe el problema para enviarlo a Redmine.
            </p>
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
          <small>Mínimo 4 caracteres.</small>
        </div>

       
        <div className="nr-grid">
          <div className="nr-field">
            <label>Prioridad</label>
            <select
              value={prioridad}
              onChange={(e) => setPrioridad(e.target.value)}
            >
              <option value="alta">Alta</option>
              <option value="media">Media</option>
              <option value="baja">Baja</option>
            </select>
          </div>

          <div className="nr-field">
            <label>Estado</label>
            <select
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
            >
              <option value="abierto">Abierto</option>
              <option value="en_progreso">En progreso</option>
              <option value="cerrado">Cerrado</option>
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
          />
          <small>Mínimo 10 caracteres.</small>
        </div>

        {/* Acciones */}
        <div className="nr-actions">
          <button
            className="nr-btn nr-btn-outline"
            onClick={limpiarFormulario}
          >
            Limpiar
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
