import {useState, useEffect, useContext} from 'react';
import { getClientes, searchCliente } from '../services/fetchClientes';
import {ClienteContext} from '../context/ClienteContext';

export const useGetClientes = () => {

    const [loading, setLoadin] = useState(false);
    const [clientes, setClientes] = useState([]);
    const {search} = useContext(ClienteContext);

    const {name='', ci='', operator='' } = search;

    useEffect(() => {
        setLoadin(true);

        if(name !== '' || ci !== '' || operator !== ''){
            searchCliente(name, ci, operator).then(({clientes}) => {
                setLoadin(false);
                console.log(clientes)
                return (setClientes(clientes.docs));
            });
        }else{
            console.log('lalala')
            getClientes().then(({docs}) => {
                setLoadin(false);
               return (setClientes(docs));
            });
        
        };
      }, [name, ci, operator]);

    return {
        loading,
        clientes
    }
}