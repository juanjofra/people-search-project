import React from 'react'

function NavSearch() {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Nombre" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Buscar</button>
          </form>
        </div>
      </nav>
    </>
  )
}

export default NavSearch
