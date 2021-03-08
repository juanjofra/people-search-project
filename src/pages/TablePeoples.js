import React, {useContext, useEffect} from 'react';
import './TablePeoples.css'
import { NavLink } from "react-router-dom";
import {useGetClientes} from '../hooks/useGetClientes';
import {ClienteContext} from '../context/ClienteContext';

function TablePeoples() {

 const {loading, clientes} = useGetClientes();
 const {success, setSuccess} = useContext(ClienteContext);

 const Cargando = (
 <div className='conteiner-spiner-loading'>
  <div className="lds-facebook">
    <div></div>
    <div></div>
    <div></div>
  </div>
 </div>
 );

 useEffect(() => {
   if(success){
     setTimeout(() => {
       setSuccess(false);
     }, 3000);
   }
 }, [success]);


  return (
    <>
      <div className='card'>
        <div className='card_header'>
          <div className='card_containerNavlink'>
            <NavLink className='card__button' to="/Form-add-people">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
              <span className='card__span'>Agregar</span>
            </NavLink>
          </div>
        </div>

      { loading ? Cargando 
      :
      ( 
      <>
        { success ? <div className="alert alert-success" role="alert">Cargado con exito! </div> : null}
       <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr className="table-head">
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
      </>  
      )    
      }

      
      </div>
    </>
  )
}

export default TablePeoples
