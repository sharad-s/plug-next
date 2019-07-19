import axios from 'axios';

const env = process.env.NODE_ENV;
const dev = env !== 'production';
const devPort = parseInt(process.env.PORT, 10) || 3000;

// const ngrok = "https://1f004319.ngrok.io"
const devProxy = `http://localhost:${devPort}/`


const baseURL = dev  ? `http://localhost:${devPort}/` : 'https://plug-api-staging.herokuapp.com/';

export default axios.create({ baseURL });
