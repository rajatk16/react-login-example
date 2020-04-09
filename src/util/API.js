import axios from 'axios';

const APIKit = axios.create({
  baseURL: 'http://ec2-3-230-150-87.compute-1.amazonaws.com:3001/api/userprofile',
  responseType: 'json'
})

export default APIKit;