import { useState } from 'react'
import { LiveBlockHoc } from './hocs'
import './globals.css'
import './text-editor.css'
import '@liveblocks/react-ui/styles.css'
import '@liveblocks/react-ui/styles/dark/attributes.css'
import '@liveblocks/react-tiptap/styles.css'
import { Editor } from './components/Editor/Editor'
import { USERS } from './constants/users'
import { getUser } from './utils/user'
import { Header } from './components/Editor/Header/Header'

export default function App() {
  const [userId, setUserId] = useState(USERS[0]?.id ?? '')
  const currentUser = getUser(userId)!

  return (
    <LiveBlockHoc>
      <Editor
        userType={currentUser.info?.type}
        renderHeader={() => (
          <Header
            userId={userId}
            users={USERS}
            onChange={setUserId}
            avatar={currentUser.info.avatar}
            userType={currentUser.info.type}
          />
        )}
      />
    </LiveBlockHoc>
  )
}
