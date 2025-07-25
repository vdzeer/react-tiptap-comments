import React from 'react'
import type { User, UserType } from '../../../types/user'

interface HeaderProps {
  userId: string
  users: User[]
  onChange: (id: string) => void
  avatar: string
  userType: UserType
}

export const Header: React.FC<HeaderProps> = ({
  userId,
  users,
  onChange,
  avatar,
}) => (
  <div
    style={{
      padding: 16,
      background: '#fff',
      display: 'flex',
      alignItems: 'center',
      gap: 16,
    }}
  >
    <span style={{ fontWeight: 500 }}>User:</span>
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
    <img
      src={avatar}
      alt='User avatar'
      style={{ width: 32, height: 32, borderRadius: '50%' }}
    />
  </div>
)
