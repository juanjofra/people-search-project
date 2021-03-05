import React from 'react'

import TablePeoples from './TablePeoples';
import NavSearch from './NavSearch'
import {FormAddPeople} from '../pages/FormAddPeople'

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
