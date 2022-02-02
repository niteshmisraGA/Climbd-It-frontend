import api from './apiConfig'

// export const BASE_URL =
//   'https://climbd-it.herokuapp.com'

const getToken = () => {
  return new Promise(resolve => {
      resolve(`Bearer ${localStorage.getItem('token') || null}`)
  })
}

export const grabStates = async () => {
  const response = await api.get('/state')
  return response.data
}

export const getState = async (id) => {
  try {
    const res = await api.get(`/state/${id}/`)
    return res.data
  } catch (err) {
    throw err
  }
}

export const createState = async (newState) => {
  try {
    const res = await api.post(`/state/`, newState)
    return res.data
  } catch (err) {
    throw err
  }
}

export const updateState = async (id, state) => {
  try {
    const res = await api.put(`/state/${id}/`, state)
    return res.data
  } catch (err) {
    throw err
  }
}

export const deleteState = async (id) => {
  try {
    const res = await api.delete(`/state/${id}`)
    return res.data
  } catch (err) {
    throw err
  }
}
