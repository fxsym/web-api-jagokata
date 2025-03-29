import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetchData() {
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://jagokata-api.vercel.app/popular"
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return { data, error, loading };
}
