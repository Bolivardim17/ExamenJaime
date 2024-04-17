import React from 'react'

const Filtros = () => {
  return (
    <div>
        <div className="container">
  <h1>Filtrar Viajes</h1>
  <form id="filtroForm">
    <div className="form-group">
      <label htmlFor="nombre">Nombre del Cliente:</label>
      <input type="text" id="nombre" name="nombre" />
    </div>
    <div className="form-group">
      <label htmlFor="destino">Destino:</label>
      <input type="text" id="destino" name="destino" />
    </div>
    <div className="form-group">
      <label htmlFor="cantidad">Costo:</label>
      <input type="number" id="cantidad" name="cantidad" min={1} />
    </div>
    <div className="form-group">
      <label htmlFor="cantidad">Cantidad de personas:</label>
      <input type="number" id="cantidad" name="cantidad" min={1} />
    </div>
    <button type="submit">Filtrar</button>
  </form>
</div>

    </div>
  )
}

export default Filtros