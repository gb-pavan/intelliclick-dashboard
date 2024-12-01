// import axiosInstance from './axiosInstance';

// export const fetchData = async (endpoint) => {
//   try {
//     const response = await axiosInstance.get(endpoint);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     throw error;
//   }
// };

import axiosInstance from './axiosInstance';

export const fetchData = async (endpoint, body = null) => {
  console.log("body sent payload",body);
  try {
    const config = body
      ? {
          method: 'POST',
          url: endpoint,
          data: body,
        }
      : {
          method: 'GET',
          url: endpoint,
        };

    console.log("config",config);

    const response = await axiosInstance(config);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

