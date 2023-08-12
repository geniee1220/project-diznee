import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  param: {
    api_key: 'f754b3d9eebf8bb3f45da4d0df798d65',
    language: 'ko-KR',
  },
});

export default instance;
