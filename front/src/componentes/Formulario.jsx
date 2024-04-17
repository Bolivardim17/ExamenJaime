import React from "react";
import "../componentes/Formulario.css";
import {Link} from "react-router-dom";


const Formulario = () => {
  return (
    <div>
      <div className="container">
        <h1>Guardar Usuario Nuevo</h1>
        <form>
          <fieldset>
            <div className="form-group">
              <label htmlFor="nombreCliente">Nombre del Cliente:</label>
              <input type="text" id="nombreCliente" name="nombreCliente" />
            </div>
            <div className="form-group">
              <label htmlFor="destino">Destino:</label>
              <input type="text" id="destino" name="destino" />
            </div>
            <div className="form-group">
              <label htmlFor="destino">Costo:</label>
              <input type="text" id="destino" name="destino" />
            </div>
            <div className="form-group">
              <label htmlFor="destino">Cantidad de personas:</label>
              <input type="text" id="destino" name="destino" />
            </div>            
            <button type="submit">GUARDAR</button>
          </fieldset>
        </form>
        <Link to="/Filtros">
        <button type="submit">FILTRAR</button></Link>
      </div>
    </div>
  );
};

export default Formulario;
