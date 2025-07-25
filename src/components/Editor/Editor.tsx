import {
  useLiveblocksExtension,
  FloatingToolbar,
  FloatingComposer,
  Toolbar,
} from '@liveblocks/react-tiptap'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Placeholder } from '@tiptap/extension-placeholder'
import { Threads } from '../Threads'
import styles from './Editor.module.css'
import { Icon } from '@liveblocks/react-ui'
import { SelectBlockExtension } from '../../extensions/SelectBlock'
import { starterKitOptions } from '../../constants/editor'
import { addBlockComment } from '../../utils/editor'
import type { EditorProps } from '../../types/editor'
import { useThreads } from '@liveblocks/react/suspense'
import { FilterLiveblocksCommentMark } from '../../extensions/FilterLiveblocksCommentMark'
import { useMemo } from 'react'

export function Editor({ userType, renderHeader }: EditorProps) {
  const liveblocks = useLiveblocksExtension()

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
  const allowedThreadIds = useMemo(
    () => (threads ? threads.map((t) => t.metadata?.highlightId || t.id) : []),
    [threads]
  )

  const editor = useEditor(
    {
      editorProps: {
        attributes: {
          class: styles.editor,
        },
      },
      extensions: [
        liveblocks,
        StarterKit.configure({
          history: false,
          ...starterKitOptions,
        }),
        Placeholder.configure({
          placeholder: 'Start writing…',
          emptyEditorClass: 'tiptap-empty',
        }),
        SelectBlockExtension,
        FilterLiveblocksCommentMark.configure({
          allowedThreadIds: allowedThreadIds.map((id) => id.toString()),
        }),
      ],
    },
    [allowedThreadIds]
  )

  return (
    <div className={styles.container}>
      <div className={styles.editorHeader}>{renderHeader()}</div>
      <Toolbar editor={editor} className={styles.editorToolbar}>
        <Toolbar.BlockSelector />
        <Toolbar.SectionInline />
        <Toolbar.Separator />
        <Toolbar.Button
          name='Comment Block'
          icon={<Icon.Comment />}
          onClick={() => addBlockComment(editor)}
        >
          Comment Block
        </Toolbar.Button>
      </Toolbar>
      <div className={styles.editorPanel}>
        <FloatingToolbar editor={editor} />
        <div className={styles.editorContainerOffset}>
          <div className={styles.editorContainer}>
            <EditorContent editor={editor} className={styles.editor} />
            <FloatingComposer
              editor={editor}
              style={{ width: 350 }}
              metadata={{ type: userType }}
            />
            <div className={styles.threads}>
              <Threads editor={editor} threads={threads} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
