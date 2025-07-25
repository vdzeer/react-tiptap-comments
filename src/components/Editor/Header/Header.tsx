import React from 'react'
import type { User } from '../../../types/user'
import styles from '../Editor.module.css'

interface HeaderProps {
  userId: string
  users: User[]
  onChange: (id: string) => void
  avatar: string
}

export const Header: React.FC<HeaderProps> = ({
  userId,
  users,
  onChange,
  avatar,
}) => (
  <div className={styles.headerContainer}>
    <span className={styles.userLabel}>User:</span>
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
    <img src={avatar} alt='User avatar' className={styles.userAvatar} />
  </div>
)
