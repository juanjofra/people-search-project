import React, {useState, useEffect} from 'react'
import { NavLink } from "react-router-dom";

function TablePeoples() {

  const [clientes, setClientes] = useState([]);
  console.log(clientes)

  useEffect(() => {
    fetch('http://192.168.100.6:4000/api/clientes').then(res => res.json()).then(({docs}) => setClientes(docs));
    
  }, [])

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
          { clientes.map( cliente => (
            <tr key={cliente._id} className="table-head">
              <th scope="row">1</th>
              <td>{cliente.name}</td>
              <td>{cliente.ci}</td>
              <td>{cliente.age}</td>
              <td>{cliente.phone}</td>
              <td>{cliente.secc}</td>
              <td>{cliente.district}</td>
              <td>{cliente.operator}</td>
            </tr>
          ))}
        </tbody>
      </table>     
      </div>
    </>
  )
}

export default TablePeoples
