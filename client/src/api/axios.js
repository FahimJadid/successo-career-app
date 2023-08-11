// Axios request in your frontend
import axios from 'axios';
import Cookies from 'js-cookie';

const token = Cookies.get('jwt');

const response = await axios.get('http://localhost:5000/api/', {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
