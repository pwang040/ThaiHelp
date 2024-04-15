const debugging = false;
const production = true;

// both false -> production
export const localEnv = debugging && !production;
export const devEnv = !debugging && !production;

export const PRODUCTION_CDN_STORAGE_SOURCE_URL =
  // "/cdn/image/thainow-service-worker%2Fconfig%2F";
  'https://firebasestorage.googleapis.com/v0/b/mono-thainow.appspot.com/o/thainow-service-worker%2Fconfig%2F';
export const LOCAL_ENV_STORAGE_SOURCE_URL =
  'https://firebasestorage.googleapis.com/v0/b/mono-thainow.appspot.com/o/thainow-service-worker%2Fconfig%2F';

export const axiosConfig = {
  baseURL: localEnv
    ? 'http://localhost:8080/api'
    : devEnv
    ? 'https://api.dev.searchforthai.com/api'
    : // production env
      'https://api.searchforthai.com/api',
};

export const STORAGE_SOURCE_URL = !production
  ? LOCAL_ENV_STORAGE_SOURCE_URL
  : PRODUCTION_CDN_STORAGE_SOURCE_URL;

export const appleSignin = {
  clientId: 'com.searchforthai.thainow',

  // the redirectURI domain must the same as the domain when pop-up is render
  // if localhost, the pop-up would return the 403 error
  redirectURI: !production
    ? 'https://dev.searchforthai.com/signin'
    : 'https://searchforthai.com/signin',
};

export const googleSignin = {
  client_id: !production
    ? '241068529796-kou3sb035i1uocf3fvrersft08ri99ai.apps.googleusercontent.com'
    : // production - client id
      '868988780448-0gbek6qrnu2p2ihish1npqcuoegfgn35.apps.googleusercontent.com',
};

export const lineSignin = {
  redirect_uri: new URL(
    localEnv
      ? 'http://localhost:3000/signin'
      : devEnv
      ? 'https://dev.searchforthai.com/signin'
      : 'https://searchforthai.com/signin',
  ),
  client_id: '2001417253',
  client_secret: 'eb28b8c4d70a46f74a39b3b913be7096',
};

export const facebookSignin = {
  appId: '390544463217297',
};

export const firebaseConfig = production
  ? {
      apiKey: 'AIzaSyBEC1gLZ4EBZK_BhxgD7xx9jEZrXj-YH_k',
      authDomain: 'mono-thainow.firebaseapp.com',
      databaseURL: 'https://mono-thainow-default-rtdb.firebaseio.com',
      projectId: 'mono-thainow',
      storageBucket: 'mono-thainow.appspot.com',
      messagingSenderId: '868988780448',
      appId: '1:868988780448:web:4638ae3e0c69d5799e2ec5',
      measurementId: 'G-032HB4XCHY',
    }
  : {
      apiKey: 'AIzaSyDfL8_HY3kWwgrKXZV5vPYHEVy2550YsEM',
      authDomain: 'mono-thainow-dev.firebaseapp.com',
      projectId: 'mono-thainow-dev',
      storageBucket: 'mono-thainow-dev.appspot.com',
      messagingSenderId: '241068529796',
      appId: '1:241068529796:web:ecfb8be1eba5f4ec874ad1',
      measurementId: 'G-LQFZC5XT89',
    };
