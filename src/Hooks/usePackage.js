import { useEffect, useState } from "react";

const usePackage = () => {

    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch('https://grim-spell-05737.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])

    return [packages, setPackages];
}
export default usePackage;
