import { useEffect, useState } from "react";

const UseItem = () => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
         .then(data => {
            setItem(data);
            setLoading(false);
        });
    },[])
    return [item, loading]
};

export default UseItem;