import { Extension } from '@tiptap/core'
import { Plugin, PluginKey } from 'prosemirror-state'
import { Decoration, DecorationSet } from 'prosemirror-view'

export interface FilterLiveblocksCommentMarkOptions {
  allowedThreadIds: string[]
}

export const FilterLiveblocksCommentMark =
  Extension.create<FilterLiveblocksCommentMarkOptions>({
    name: 'filterLiveblocksCommentMark',

    addOptions() {
      return {
        allowedThreadIds: [],
      }
    },

    addProseMirrorPlugins() {
      return [
        new Plugin({
          key: new PluginKey('filterLiveblocksCommentMark'),
          props: {
            decorations: (state) => {
              const { doc } = state
              const decorations: Decoration[] = []
              doc.descendants((node, pos) => {
                if (
                  node.isText &&
                  node.marks &&
                  typeof node.text === 'string'
                ) {
                  node.marks.forEach((mark) => {
                    if (
                      mark.type.name === 'liveblocksCommentMark' &&
                      !this.options.allowedThreadIds.includes(
                        mark.attrs.threadId
                      )
                    ) {
                      decorations.push(
                        Decoration.inline(
                          pos,
                          pos + (node.text ? node.text.length : 0),
                          { class: 'lb-hide-comment-mark' }
                        )
                      )
                    }
                  })
                }
                return true
              })
              return DecorationSet.create(doc, decorations)
            },
          },
        }),
      ]
    },
  })
