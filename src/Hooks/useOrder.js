import { useEffect, useState } from "react";

const useOrder = () => {

    const [order, setOrder] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://grim-spell-05737.herokuapp.com/order')
            .then(res => res.json())
            .then(data => setOrder(data))
        setIsLoading(false);
    }, [])

    return [order, isLoading];
}
export default useOrder;