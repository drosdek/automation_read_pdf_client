import api from './api';

type Method = 'get' | 'post' | 'put' | 'delete';

const apiFactory = (endpoint: string, method: Method, data?: any) => {
  const config = {
    url: endpoint,
    method: method,
    data
  };

  return api(config)
    .then(response => response.data)
    .catch(error => {
      console.error('API error:', error);
      throw error;
    });
};

export default apiFactory;