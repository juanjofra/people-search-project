
export const getClientes = () => {

  return fetch('https://backend-people-search-project.herokuapp.com/api/clientes').then(res => res.json());
}

export const setCliente = (values) => {
  const url = 'https://backend-people-search-project.herokuapp.com/api/clientes/register';

     return fetch(url, {
        method: 'POST', 
        body: JSON.stringify(values),
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error));
}