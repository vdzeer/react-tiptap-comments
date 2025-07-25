import type { User } from '../types/user'

export const USERS: User[] = [
  {
    id: 'mislav.abha@example.com',
    info: {
      name: 'Mislav Abha',
      avatar: 'https://liveblocks.io/avatars/avatar-2.png',
      type: 'external',
    },
  },
  {
    id: 'charlie.layne@example.com',
    info: {
      name: 'Charlie Layne',
      avatar: 'https://liveblocks.io/avatars/avatar-1.png',
      type: 'internal',
    },
  },
]
