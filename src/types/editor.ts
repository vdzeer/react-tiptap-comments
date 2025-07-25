import type { Editor as TiptapEditor } from '@tiptap/react'

export interface EditorProps {
  userType: string
  renderHeader: () => React.ReactNode
}

export type EditorInstance = TiptapEditor | null
