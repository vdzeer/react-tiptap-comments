import type { StarterKitOptions } from '@tiptap/starter-kit'

export const starterKitOptions: Partial<StarterKitOptions> = {
  blockquote: {
    HTMLAttributes: {
      class: 'tiptap-blockquote',
    },
  },
  code: {
    HTMLAttributes: {
      class: 'tiptap-code',
    },
  },
  codeBlock: {
    languageClassPrefix: 'language-',
    HTMLAttributes: {
      class: 'tiptap-code-block',
      spellcheck: false,
    },
  },
  heading: {
    levels: [1, 2, 3],
    HTMLAttributes: {
      class: 'tiptap-heading',
    },
  },
  horizontalRule: {
    HTMLAttributes: {
      class: 'tiptap-hr',
    },
  },
  listItem: {
    HTMLAttributes: {
      class: 'tiptap-list-item',
    },
  },
  orderedList: {
    HTMLAttributes: {
      class: 'tiptap-ordered-list',
    },
  },
  paragraph: {
    HTMLAttributes: {
      class: 'tiptap-paragraph',
    },
  },
}

export const ROOM_ID = 'doc-1'
