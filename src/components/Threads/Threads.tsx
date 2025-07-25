import type { BaseMetadata, ThreadData } from '@liveblocks/client'
import styles from './Threads.module.css'
import { CommentIcon } from '../../icons'
import { Thread } from '@liveblocks/react-ui'

export function Threads({
  threads,
  handleThreadClick,
}: {
  threads: ThreadData<BaseMetadata>[]
  handleThreadClick: (thread: ThreadData<BaseMetadata>) => void
}) {
  if (!threads) {
    return null
  }

  if (threads.length === 0) {
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

  return threads.map((thread) => (
    <Thread
      key={thread.id}
      thread={thread}
      onClick={() => handleThreadClick(thread)}
      className={styles.threadItem}
    />
  ))
}
