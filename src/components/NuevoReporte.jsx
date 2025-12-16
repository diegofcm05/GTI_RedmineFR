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
    // Puedes mapear prioridad a números según Redmine si quieres
    priority_id: prioridad === "alta" ? 4 : prioridad === "media" ? 2 : 1,
    // tracker_id fijo, ya que tu backend usa 1
    tracker_id: 1
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
