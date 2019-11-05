/* global localStorage */

import axios from 'axios'

const API_URL = 'http://passion-io-app.s3-website.eu-central-1.amazonaws.com/api/v1/'

export default axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.token
  }
})
