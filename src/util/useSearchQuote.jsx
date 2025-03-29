import { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "../context/QueryContext";

export default function useSearchQuote() {
    const {query} = useQuery()
    const [data, setData] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!query) return;
        const fetchData = async () => {
            setData(null); // Reset data sebelum fetch baru
            setError(null); // Reset error sebelum fetch baru
            try {
                setLoading(true);
                const response = await axios.get(
                `https://jagokata-api.vercel.app/search?q=${(query)}`
                );
                setData(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [query]);
    return {data, error, loading};
}
