import { USERS } from '../constants/users'
import type { User } from '../types/user'

export function getUser(id: string): User | null {
  return USERS.find((u) => u.id === id) || null
}
