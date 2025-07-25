import React from 'react'
import type { User } from '../../../types/user'
import styles from '../Editor.module.css'

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
    className={styles.userSelect}
  >
    {users.map((u) => (
      <option key={u.id} value={u.id}>
        {u.info.name} ({u.info.type})
      </option>
    ))}
  </select>
)
