import axios from 'axios'

export default axios.create({
    // baseURL: 'https://authorshub.herokuapp.com'
    baseURL: process.env.BASE_URL
})

// baseURL: 'http://localhost:3008'

