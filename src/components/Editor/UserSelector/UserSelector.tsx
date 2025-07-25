import React from 'react'
import type { User } from '../../../types/user'

interface UserSelectorProps {
  userId: string
  users: User[]
  onChange: (id: string) => void
}

export const UserSelector: React.FC<UserSelectorProps> = ({
  userId,
  users,
  onChange,
}) => (
  <select
    value={userId}
    onChange={(e) => onChange(e.target.value)}
    style={{ fontSize: 16, padding: 4 }}
  >
    {users.map((u) => (
      <option key={u.id} value={u.id}>
        {u.info.name} ({u.info.type})
      </option>
    ))}
  </select>
)
