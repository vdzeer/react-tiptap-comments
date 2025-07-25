import { AnchoredThreads, FloatingThreads } from '@liveblocks/react-tiptap'
import type { BaseMetadata, ThreadData } from '@liveblocks/client'
import type { Editor } from '@tiptap/react'
import styles from './Threads.module.css'
import { CommentIcon } from '../../icons'
import { useIsMobile } from '../../hooks'

export function Threads({
  editor,
  threads,
}: {
  editor: Editor | null
  threads: ThreadData<BaseMetadata>[]
}) {
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
