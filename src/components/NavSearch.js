import React, {useContext, useState} from 'react'
import { ClienteContext } from '../context/ClienteContext';

function NavSearch() {

const [search, setSearch] = useState({
  name:'',
  ci:'',
  operator:''
});

const { setSearch:setSerachContext } = useContext(ClienteContext);
const {name, ci, operator} = search;

const handleChange = (e) => {
  setSearch({
    ...search,
    [e.target.name]: e.target.value
  })
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
          <input className="form-control me-2" type="search" placeholder="Nombre" aria-label="Search" name='name' onChange={handleChange} value={name}/>
          <input className="form-control me-2" type="search" placeholder="CI" aria-label="Search" name='ci' onChange={handleChange} value={ci}/>
          <input className="form-control me-2" type="search" placeholder="Operador" aria-label="Search" name='operator' onChange={handleChange} value={operator}/>
          <button className="btn btn-outline-success" type="submit">Buscar</button>
          </form>
        </div>
      </nav>
    </>
  )
}

export default NavSearch
