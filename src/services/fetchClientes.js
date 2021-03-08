const URLdev = 'http://localhost:3300'
  const URL = 'https://backend-people-search-project.herokuapp.com'

export const getClientes = () => {
  return fetch(`${URL}/api/clientes`).then(res => res.json());
}

export const setCliente = (values) => {
  const url = `${URL}/api/clientes/register`;

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
}