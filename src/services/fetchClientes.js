
const URLdev = 'http://localhost:3300'
const URL = 'https://backend-people-search-project.herokuapp.com'


export const SetCliente = (values) => {
  // const url = `${URL}/api/clientes/register`;
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

export const SearchCliente = (name='', ci='', operator='') => {
  // return fetch(`${URL}/api/clientes/buscador?name=${name}&ci=${ci}&operator=${operator}`).then(res => res.json());
  return fetch(`${URLdev}/api/clientes/buscador?name=${name}&ci=${ci}&operator=${operator}`).then(res => res.json());
}