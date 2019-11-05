/* global localStorage */

import axios from 'axios'

const API_URL = 'https://evening-stream-34331.herokuapp.com/api/v1/'

export default axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.token
  }
})
