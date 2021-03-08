const URLdev = 'http://localhost:3300'
  const URL = 'https://backend-people-search-project.herokuapp.com'

export const getClientes = () => {

  return fetch(`${URLdev}/api/clientes`).then(res => res.json());
}

export const setCliente = (values) => {
  const url = `${URLdev}/api/clientes/register`;

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
  return fetch(`${URLdev}/api/clientes/buscador?name=${name}&ci=${ci}&operator=${operator}`).then(res => res.json());
}