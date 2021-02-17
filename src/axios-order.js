import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-my-burger-fa4ae-default-rtdb.firebaseio.com/'
})

export default instance