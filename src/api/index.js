import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertPost= payload => api.post(`/movie`, payload)
export const getAllPosts = () => api.get(`/movies`)
export const updatePostById = (id, payload) => api.put(`/movie/${id}`, payload)
export const deletePostById = id => api.delete(`/movie/${id}`)
export const getPostById = id => api.get(`/movie/${id}`)

const apis = {
    insertPost,
    getAllPosts,
    updatePostById,
    deletePostById,
    getPostById,
}

export default apis
