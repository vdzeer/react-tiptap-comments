import { useThreads } from '@liveblocks/react/suspense'
import { AnchoredThreads, FloatingThreads } from '@liveblocks/react-tiptap'
import type { Editor } from '@tiptap/react'
import styles from './Threads.module.css'
import { CommentIcon } from '../../icons'
import { useIsMobile } from '../../hooks'

export function Threads({
  editor,
  userType,
}: {
  editor: Editor | null
  userType: string
}) {
  const { threads } = useThreads(
    userType === 'internal'
      ? {}
      : {
          query: {
            metadata: {
              type: userType,
            },
          },
        }
  )
  const isMobile = useIsMobile()

  if (!threads || !editor) {
    return null
  }

  if (!isMobile && threads.length === 0) {
    return (
      <div className={styles.noComments}>
        <div className={styles.noCommentsHeader}>No comments yet</div>
        <p>
          Create a comment by selecting text and pressing the{' '}
          <CommentIcon className={styles.noCommentsIcon} /> Comment button.
        </p>
      </div>
    )
  }

  return isMobile ? (
    <FloatingThreads threads={threads} editor={editor} />
  ) : (
    <AnchoredThreads threads={threads} editor={editor} style={{ width: 350 }} />
  )
}
