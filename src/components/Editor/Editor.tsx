import {
  useLiveblocksExtension,
  FloatingToolbar,
  FloatingComposer,
  Toolbar,
} from '@liveblocks/react-tiptap'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Placeholder } from '@tiptap/extension-placeholder'
import styles from './Editor.module.css'
import { Icon } from '@liveblocks/react-ui'
import { SelectBlockExtension } from '../../extensions/SelectBlock'
import { starterKitOptions } from '../../constants/editor'
import { addBlockComment } from '../../utils/editor'
import type { EditorProps } from '../../types/editor'
import { useMemo, forwardRef, useImperativeHandle } from 'react'
import { FilterLiveblocksCommentMark } from '../../extensions/FilterLiveblocksCommentMark'

export const Editor = forwardRef(function Editor(
  { userType, threads, field }: EditorProps,
  ref
) {
  const liveblocks = useLiveblocksExtension({
    field,
  })

  const allowedThreadIds = useMemo(
    () => (threads ? threads.map((t) => t.id) : []),
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

  useImperativeHandle(ref, () => editor, [editor])

  return (
    <div className={styles.container}>
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
            <EditorContent
              editor={editor}
              className={styles.editor}
              onBlur={() => editor?.commands.selectThread(null)}
            />
            <FloatingComposer
              editor={editor}
              className={styles.floatingComposerWidth}
              metadata={{ highlightId: field, type: userType }}
            />
          </div>
        </div>
      </div>
    </div>
  )
})
