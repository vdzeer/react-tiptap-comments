import { useState, useRef } from 'react'
import type { Editor as TiptapEditor } from '@tiptap/react'
import type { ThreadData, BaseMetadata } from '@liveblocks/client'
import { useThreads } from '@liveblocks/react/suspense'
import { USERS } from './constants/users'
import { getUser } from './utils/user'
import { Header } from './components/Editor/Header/Header'
import { Editor } from './components/Editor/Editor'

import styles from './components/Editor/Editor.module.css'
import { Threads } from './components'

export default function AppContent() {
  const [userId, setUserId] = useState(USERS[0]?.id ?? '')
  const currentUser = getUser(userId)!

  const { threads } = useThreads({
    query: {
      resolved: false,
      ...(currentUser.info.type === 'internal'
        ? {}
        : { metadata: { type: currentUser.info.type } }),
    },
  })

  const sections = ['Section 1', 'Section 2', 'Section 3']

  const editorRefs = useRef<(TiptapEditor | null)[]>([])

  const handleThreadClick = (thread: ThreadData<BaseMetadata>) => {
    const sectionIdx = sections.findIndex(
      (section) => thread.metadata?.highlightId === section
    )
    if (sectionIdx !== -1 && editorRefs.current[sectionIdx]) {
      const editor = editorRefs.current[sectionIdx]
      if (editor) {
        editor.commands.selectThread(thread.id)
        setTimeout(() => {
          editor.commands.focus()
          editor.commands.scrollIntoView()
        }, 50)
      }
    }
  }

  return (
    <>
      <Header
        userId={userId}
        users={USERS}
        onChange={setUserId}
        avatar={currentUser.info.avatar}
      />
      <div className={styles.appContentColumn}>
        <div className={styles.appContentRow}>
          <div className={styles.appContentScrollable}>
            {sections.map((section, idx) => (
              <div key={section} className={styles.sectionBlock}>
                <div className={styles.sectionLabel}>{section}</div>
                <Editor
                  field={section}
                  userType={currentUser.info.type}
                  threads={threads.filter(
                    (thread) => thread.metadata?.highlightId === section
                  )}
                  ref={(el) =>
                    (editorRefs.current[idx] = el as TiptapEditor | null)
                  }
                />
              </div>
            ))}
          </div>
          <div className={styles.threads}>
            <Threads threads={threads} handleThreadClick={handleThreadClick} />
          </div>
        </div>
      </div>
    </>
  )
}
