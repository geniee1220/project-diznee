import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'd1f9c15d9c5f80644b92ac5781f22737',
    language: 'ko-KR',
  },
});

export default instance;
