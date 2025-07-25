import type { Editor as TiptapEditor } from '@tiptap/react'
import type { ThreadData, BaseMetadata } from '@liveblocks/client'

export interface EditorProps {
  userType: string
  threads: ThreadData<BaseMetadata>[]
  field: string
}

export type EditorInstance = TiptapEditor | null
