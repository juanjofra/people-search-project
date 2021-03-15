const URLdev = 'http://localhost:3300'
const fetcher = (...args) => fetch(...args).then(res => res.json());

export const useSerachCliente = (name, ci, operator) => {
    const [pageIndex, setPageIndex] = useState('1');
    const { data, error } = useSWR(`${URLdev}/api/clientes/buscador?name=${name}&ci=${ci}&operator=${operator}`, fetcher);

    return {
        data,
        error
    }
}
