import {useState, useEffect, useContext} from 'react';
import { getClientes } from '../services/fetchClientes';

export const useGetClientes = () => {

    const [loading, setLoadin] = useState(false);
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        setLoadin(true);
        getClientes().then(({docs}) => {
            setLoadin(false);
           return (setClientes(docs));
        });
      }, []);

    return {
        loading,
        clientes
    }
}