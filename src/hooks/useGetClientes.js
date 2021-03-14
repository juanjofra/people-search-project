import {useState, useEffect, useContext} from 'react';
import { getClientes, searchCliente } from '../services/fetchClientes';
import {ClienteContext} from '../context/ClienteContext';

export const useGetClientes = () => {

    const [loading, setLoadin] = useState(false);
    const [clientes, setClientes] = useState([]);
    const [ actualPage, setActualPage ] = useState(0);
    const [ pagination, setPagination ] = useState({
        hasNextPage: false,
        hasPrevPage: false,
        limit: 0,
        nextPage: null,
        page: 0,
        pagingCounter: 0,
        prevPage: null,
        totalDocs: 0,
        totalPages: 0
    });

    const {search} = useContext(ClienteContext);

    const {name='', ci='', operator='' } = search;

    useEffect(() => {
        setLoadin(true);
console.log(actualPage, 'actualpage')
        if(name !== '' || ci !== '' || operator !== ''){
            if(actualPage <= 0){
                searchCliente(name, ci, operator).then((data) => {
                    setLoadin(false);
                    setPagination({
                        hasNextPage: data.hasNextPage,  
                        hasPrevPage: data.hasPrevPage,
                        limit: data.limit,
                        nextPage: data.nextPage,
                        page: data.page,
                        pagingCounter: data.pagingCounter,
                        prevPage: data.prevPage,
                        totalDocs: data.totalDocs,
                        totalPages: data.totalPages
                    });
                    return (setClientes(clientes.docs));
                });
            }else {

            }
        }else{
            if(actualPage <= 0){
                getClientes().then((data) => {
                    setLoadin(false);
                    setPagination({
                        hasNextPage: data.hasNextPage,  
                        hasPrevPage: data.hasPrevPage,
                        limit: data.limit,
                        nextPage: data.nextPage,
                        page: data.page,
                        pagingCounter: data.pagingCounter,
                        prevPage: data.prevPage,
                        totalDocs: data.totalDocs,
                        totalPages: data.totalPages
                    });
                    console.log(data)
                   return (setClientes(data.docs));
                });
            }else {
                getClientes(actualPage).then((data) => {
                    setLoadin(false);
                    setPagination({
                        hasNextPage: data.hasNextPage,  
                        hasPrevPage: data.hasPrevPage,
                        limit: data.limit,
                        nextPage: data.nextPage,
                        page: data.page,
                        pagingCounter: data.pagingCounter,
                        prevPage: data.prevPage,
                        totalDocs: data.totalDocs,
                        totalPages: data.totalPages
                    });
                    console.log(data)
                   return (setClientes(data.docs));
                });
            }
        };
      }, [name, ci, operator, actualPage]);

    return {
        loading,
        clientes,
        pagination,
        setActualPage
    }
}