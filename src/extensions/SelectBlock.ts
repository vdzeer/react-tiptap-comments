import { Extension, type RawCommands } from '@tiptap/react'
import { EditorState, NodeSelection, Transaction } from 'prosemirror-state'

export const SelectBlockExtension = Extension.create({
  name: 'selectBlock',

  addCommands() {
    return {
      selectCurrentBlock:
        () =>
        ({
          state,
          dispatch,
        }: {
          state: EditorState
          dispatch?: (tr: Transaction) => void
        }) => {
          const { selection } = state
          const depth = selection.$from.depth

          if (depth === 0) {
            return false
          }

          const pos = selection.$from.before(depth)

          if (dispatch) {
            dispatch(
              state.tr.setSelection(NodeSelection.create(state.doc, pos))
            )
          }

          return true
        },
    } as Partial<RawCommands>
  },
})
