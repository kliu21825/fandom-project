import router from '@/router'
import { firebaseApp } from '@/composables/useFirebase'

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth'
import { useAuth as firebaseAuth } from '@vueuse/firebase'

const auth = getAuth(firebaseApp)

const { isAuthenticated, user } = firebaseAuth(auth)

export const useAuth = () => {
  const login = async (username, password) => {
    await signInWithEmailAndPassword(auth, username, password)
    return isAuthenticated.value
  }
  const signup = async (username, password) => {
    await createUserWithEmailAndPassword(auth, username, password)
    return isAuthenticated.value
  }
  const logout = async () => {
    await signOut(auth)
    router.push({ name: 'Home' })
  }
  return { isAuthenticated, user, login, signup, logout }
}
