const URLdev = 'http://localhost:3300'
  const URL = 'https://backend-people-search-project.herokuapp.com'

export const getClientes = (page = 0) => {
  console.log(page, 'getClientes');
  return fetch(`${URL}/api/clientes`).then(res => res.json());
  // return page === 0 ? fetch(`${URLdev}/api/clientes`).then(res => res.json()) : fetch(`${URLdev}/api/clientes?page=${page}`).then(res => res.json());
}

export const setCliente = (values) => {
  const url = `${URL}/api/clientes/register`;
  // const url = `${URLdev}/api/clientes/register`;

     return fetch(url, {
        method: 'POST', 
        body: JSON.stringify(values),
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error));
}

export const searchCliente = (name='', ci='', operator='') => {
  return fetch(`${URL}/api/clientes/buscador?name=${name}&ci=${ci}&operator=${operator}`).then(res => res.json());
  // return fetch(`${URLdev}/api/clientes/buscador?name=${name}&ci=${ci}&operator=${operator}`).then(res => res.json());
}