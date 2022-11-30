import { ref } from 'vue'

const fakeUser = [
  {
    username: 'admin',
    password: 'admin',
  },
]

const isAuthenticated = ref(false)
const user = ref({})

export const useAuth = () => {
  const login = (username, password) => {
    console.log(username)
    const user = fakeUser.find((u) => u.username === username && u.password === password)
    if (user) {
      const { username } = user
      isAuthenticated.value = true
      user.value = { username }
      return true
    }
    return false
  }
  const logout = () => {
    isAuthenticated.value = false
    user.value = {}
  }
  return { isAuthenticated, user, login, logout }
}
