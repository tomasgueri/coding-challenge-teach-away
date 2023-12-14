import imgurAPI from '../api/imgur';

const cache = {};

export const fetchWithCache = async (url, options = {}) => {
  const cacheKey = url + JSON.stringify(options);

  if (cache[cacheKey]) {
    return cache[cacheKey];
  } else {
    try {
      const response = await imgurAPI.get(url, options);
      cache[cacheKey] = response.data;
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};
