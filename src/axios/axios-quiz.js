import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-f8b41.firebaseio.com/'
})