import { useState } from 'react';
import useSWR from 'swr';
const URLdev = 'http://localhost:3300'
const fetcher = (...args) => fetch(...args).then(res => res.json());


export const useGetClientes = () => {
    const [pageIndex, setPageIndex] = useState('1');
    const { data, error } = useSWR(`${URLdev}/api/clientes?page=${pageIndex}`, fetcher);

    return {
        data,
        loading: !error && !data,
        error,
        setPageIndex
    }
}