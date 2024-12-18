// import { useState, useEffect } from 'react';
// import { fetchData } from '../api/fetchData';

// const useFetchData = (endpoint,body=null) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const result = await fetchData(endpoint,body=null);
//         setData(result);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     getData();
//   }, [endpoint]);

//   return { data, loading, error };
// };

// export default useFetchData;

import { useState, useEffect, useCallback } from 'react';
import { fetchData } from '../api/fetchData';

const useFetchData = (endpoint, body = null) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = useCallback(async () => {
    setLoading(true);
    try {
      const result = await fetchData(endpoint, body);
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [endpoint, body]);

  useEffect(() => {
    getData();
  }, [getData]);

  return { data, loading, error, refetch: getData };
};

export default useFetchData;

