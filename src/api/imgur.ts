import axios from 'axios';

const imgurAPI = axios.create({
  baseURL: 'https://api.imgur.com/3/',
  headers: {
    Authorization: `Client-ID ${process.env.NEXT_PUBLIC_IMGUR_CLIENT_ID}`,
  },
});

export default imgurAPI;
