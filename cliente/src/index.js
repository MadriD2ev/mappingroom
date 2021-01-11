import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Agregarnuevo from "./components/Agregarnuevo";
import Mapeo from "./components/Mapeo";

ReactDOM.render(
  <React.StrictMode>
    <div className='container'>
      <h3> Mapeo de Habitaciones</h3>
      Muestra y agrega códigos a las categorías de las habitaciones
      <Agregarnuevo/>
      <Mapeo/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

