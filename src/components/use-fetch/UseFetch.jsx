import { useEffect, useState } from "react";

const UseFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setPending(true);
      try {
        const response = await fetch(url, { ...options });
        if (!response.ok) throw new Error(response.statusText);

        const result = await response.json();
        setData(result);
        setError(null);
      } catch (e) {
        setError(`${e.message}. Some error occurred.`);
      } finally {
        setPending(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, pending, error };
};

export default UseFetch;
