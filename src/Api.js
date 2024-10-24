import axios from 'axios';

// Create an instance of axios
const AxiosPoint = axios.create({
  baseURL: 'https://fakestoreapi.com', 
  
  
});


export default {
    getProducts: () => {
      return AxiosPoint.get('/products');
    },

    AxiosPoint,
}