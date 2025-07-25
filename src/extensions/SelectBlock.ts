import { Extension, type RawCommands } from '@tiptap/react'
import { EditorState, TextSelection, Transaction } from 'prosemirror-state'

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
          const { selection, doc } = state
          const $from = selection.$from

          let from = $from.start(0)
          let to = $from.end(0)

          for (let depth = $from.depth; depth > 0; depth--) {
            const node = $from.node(depth)

            if (node.isBlock) {
              from = $from.before(depth)
              to = $from.after(depth)
            }
          }

          if (dispatch) {
            dispatch(
              state.tr
                .setSelection(TextSelection.create(doc, from, to))
                .scrollIntoView()
            )
          }

          return true
        },
    } as Partial<RawCommands>
  },
})
