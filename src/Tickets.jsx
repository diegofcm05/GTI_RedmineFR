// Tickets.jsx
import { useState } from "react";
import "./Tickets.css";
import NuevoReporte from "./components/NuevoReporte.jsx"

export default function SistemaTickets() {
  
  return (
    <>
      {/* Header con título a la izquierda */}
      <header className="tickets-header">
        <div className="header-content">
          <h1 className="tickets-title">Sistema de Tickets - GTI</h1>
          <div className="header-divider"></div>
        </div>
      </header>
      
      {/* Contenido centrado */}
        <NuevoReporte/>
      
    </>
  );
}
