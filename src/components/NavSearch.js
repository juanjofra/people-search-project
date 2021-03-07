import React, {useContext, useState} from 'react'
import { ClienteContext } from '../context/ClienteContext';

function NavSearch() {

const [search, setSearch] = useState('');
const { setSearch:setSerachContext } = useContext(ClienteContext);

const handleChange = (e) => {
  setSearch(e.target.value)
}

const handleSumit = (e) => {
  e.preventDefault();
  setSerachContext(search);

}

  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <form className="d-flex" onSubmit={handleSumit}>
          <input className="form-control me-2" type="search" placeholder="Nombre" aria-label="Search" onChange={handleChange} value={search}/>
          <button className="btn btn-outline-success" type="submit">Buscar</button>
          </form>
        </div>
      </nav>
    </>
  )
}

export default NavSearch
