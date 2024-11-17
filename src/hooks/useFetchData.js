import { useState, useEffect } from 'react';
import { fetchData } from '../api/fetchData';

const useFetchData = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData(endpoint);
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [endpoint]);

  return { data, loading, error };
};

export default useFetchData;
