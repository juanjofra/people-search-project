
export const getClientes = () => {

  return fetch('http://localhost:4000/api/clientes').then(res => res.json());
}

export const setCliente = (values) => {
  const url = 'http://localhost:4000/api/clientes/register';

     return fetch(url, {
        method: 'POST', 
        body: JSON.stringify(values),
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error));
}