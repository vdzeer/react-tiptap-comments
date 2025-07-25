import type { Editor as TiptapEditor, SingleCommands } from '@tiptap/react'

export function addBlockComment(editor: TiptapEditor | null) {
  if (!editor) return
  const selected = (
    editor.commands as SingleCommands & { selectCurrentBlock: () => boolean }
  ).selectCurrentBlock()

  if (!selected) return

  editor.chain().focus().addPendingComment().run()
}
