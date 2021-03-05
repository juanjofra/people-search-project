import React from 'react'
import { NavLink } from "react-router-dom";

function TablePeoples() {

  const url = "#";

  return (
    <>
      <div className='card'>
        <div className='card_header'>
          <NavLink className='card__button' to="/Form-add-people">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
              <span className='card__span'>Agregar</span>
          </NavLink>
        </div>
       <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr className="table-head">
            <th scope="col">#</th>
            <th scope="col">Nombre y Apellido</th>
            <th scope="col">Cedula</th>
            <th scope="col">Edad</th>
            <th scope="col">Telefono</th>
            <th scope="col">Secc</th>
            <th scope="col">Barrio</th>
            <th scope="col">Operador</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-head">
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@fat</td>
          </tr>
        </tbody>
      </table>     
      </div>
    </>
  )
}

export default TablePeoples
