import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  param: {
    api_key: '140073926c0d814332a27d7493bac249',
    language: 'ko-KR',
  },
});

export default instance;
