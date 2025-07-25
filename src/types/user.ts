export type UserType = 'internal' | 'external'

export interface UserInfo {
  name: string
  avatar: string
  type: UserType
}

export interface User {
  id: string
  info: UserInfo
}
