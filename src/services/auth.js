import api from './api'

export const register = async (email, password) => {
  return await api.post('/register', { email, password })
}

export const login = async (email, password) => {
  const res = await api.post('/login', { email, password })

  localStorage.setItem('token', res.data.accessToken)
  localStorage.setItem('user', JSON.stringify(res.data.user))

  return res.data
}