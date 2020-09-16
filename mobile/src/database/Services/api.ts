import axios from 'axios';
import md5 from 'react-native-md5';

const ts = new Date().valueOf();
const privateKey = '2941ebac384b5f5005040c1f61ee1978903c6987';
const publicKey = '4b6411507aa8343c65b92f4239ae0d1a';
const hash = md5.hex_md5((ts + privateKey + publicKey).toLowerCase());

const api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public/characters',
  params: {
    ts,
    apikey: publicKey,
    hash,
  },
});

export default api;
