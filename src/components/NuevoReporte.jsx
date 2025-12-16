import "./NuevoReporte.css";

export default function NuevoReporte() {
  return (
    <div className="nr-container">
      <div className="nr-card">
        {/* Header */}
        <div className="nr-header">
          <div>
            <h2>Nuevo reporte</h2>
            <p>
              Escribe el problema con detalle. Luego lo enviaremos a Redmine.
            </p>
          </div>
          <button className="nr-btn nr-btn-secondary">Completa el formulario</button>
        </div>

        {/* Asunto */}
        <div className="nr-field">
          <label>Asunto</label>
          <input
            type="text"
            placeholder="Escribe aquí el asunto del reporte"
          />
          <small>Mínimo 4 caracteres.</small>
        </div>

        {/* Prioridad y Estado */}
        <div className="nr-grid">
          <div className="nr-field">
            <label>Prioridad</label>
            <select defaultValue="media">
              <option value="alta">Alta</option>
              <option value="media">Media</option>
              <option value="baja">Baja</option>
            </select>
          </div>

          <div className="nr-field">
            <label>Estado</label>
            <select defaultValue="abierto">
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
            placeholder="Describe el problema y prueba desde la app"
          />
          <small>Mínimo 10 caracteres. Entre más claro, mejor.</small>
        </div>

        {/* Actions */}
        <div className="nr-actions">
          <button className="nr-btn nr-btn-outline">Limpiar</button>
          <button className="nr-btn nr-btn-primary">Crear</button>
        </div>
      </div>
    </div>
  );
}
