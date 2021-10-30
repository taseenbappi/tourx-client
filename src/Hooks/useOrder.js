import { useEffect, useState } from "react";

const useOrder = () => {

    const [order, setOrder] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/order')
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])

    return [order];
}
export default useOrder;