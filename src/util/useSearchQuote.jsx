import { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "../context/QueryContext";

export default function useSearchQuote() {
    const {query} = useQuery()
    const [data, setData] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        if (!query) return;
        const fetchData = async () => {
            setData(null); // Reset data sebelum fetch baru
            setError(null); // Reset error sebelum fetch baru
        try {
            const response = await axios.get(
            `https://api.allorigins.win/raw?url=https://jagokata-api.vercel.app/search?q=${(query)}`
            );
            setData(response.data);
        } catch (error) {
            setError(error);
        }
        };

        fetchData();
    }, [query]);
    return {data, error};
}
