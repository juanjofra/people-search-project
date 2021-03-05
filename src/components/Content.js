import React from 'react'

import TablePeoples from '../pages/TablePeoples';
import NavSearch from './NavSearch'

function Content() {
  return (
    <div className='container-fluid'>
      <section>
        <NavSearch />
      </section>
      <section>
        <TablePeoples />
      </section>
      
    </div>
  )
}

export default Content
