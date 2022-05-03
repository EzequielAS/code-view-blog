import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://blog-ghost.ghost.io/ghost/api/v3/content'
})