import axios from 'axios';

export const instanseAxios = axios.create({
  withCredentials: true,
});
