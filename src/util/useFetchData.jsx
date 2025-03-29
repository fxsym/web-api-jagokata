import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetchData() {
  const [data, setData] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.allorigins.win/raw?url=https://jagokata-api.vercel.app/popular"
        );
        setData(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);
  return { data, error };
}
